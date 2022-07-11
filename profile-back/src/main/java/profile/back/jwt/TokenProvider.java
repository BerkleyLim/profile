package profile.back.jwt;


import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.repository.query.QueryLookupStrategy.Key;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.IOException;
import io.jsonwebtoken.security.Keys;

@Component
public class TokenProvider implements InitializingBean {

    private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);

    private static final String AUTHORITIES_KEY = "auth";

    private final String secret;
    private final long tokenValidityInMilliseconds;

    private Key key;

    public TokenProvider(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.token-validity-in-seconds}") long tokenValidityInSeconds) {
        this.secret = secret;
        this.tokenValidityInMilliseconds = tokenValidityInSeconds * 1000;
    }

    @Override
    public void afterPropertiesSet() {
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }
    

    public String createToken(Authentication authentication) {
        String authorities = authentication.getAuthorities().stream()
           .map(GrantedAuthority::getAuthority)
           .collect(Collectors.joining(","));

        long now = (new Date()).getTime();
        Date validity = new Date(now + this.tokenValidityInMilliseconds);

        return Jwts.builder()
           .setSubject(authentication.getName())
           .claim(AUTHORITIES_KEY, authorities)
           .signWith(key, SignatureAlgorithm.HS512)
           .setExpiration(validity)
           .compact();
     }
    
    
    public Authentication getAuthentication(String token) {
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(token)
                .getBody();

        Collection<? extends GrantedAuthority> authorities =
           Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
              .map(SimpleGrantedAuthority::new)
              .collect(Collectors.toList());

        User principal = new User(claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, token, authorities);
     }
    
    public boolean validateToken(String token) {
        try {
           Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
           return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
           logger.info("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
           logger.info("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
           logger.info("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
           logger.info("JWT 토큰이 잘못되었습니다.");
        }
        return false;
     }
    
    public class JwtFilter extends GenericFilterBean {

        private static final Logger logger = LoggerFactory.getLogger(JwtFilter.class);

        public static final String AUTHORIZATION_HEADER = "Authorization";

        private TokenProvider tokenProvider;

        public JwtFilter(TokenProvider tokenProvider) {
            this.tokenProvider = tokenProvider;
        }

        @Override
        public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
                throws IOException, ServletException {
            
        }
    }
    
    private String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader(AUTHORIZATION_HEADER);
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
           return bearerToken.substring(7);
        }
        return null;
     }
}