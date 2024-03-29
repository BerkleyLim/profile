package profile.back.web.json;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import profile.back.common.jwt.JwtFilter;
import profile.back.common.jwt.TokenProvider;
import profile.back.domain.dto.auth.LoginDTO;
import profile.back.domain.dto.auth.OperatorDTO;
import profile.back.domain.dto.auth.TokenDTO;
import profile.back.domain.entity.user.TMember;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Slf4j
public class AuthController {
  private final TokenProvider tokenProvider;
  private final AuthenticationManagerBuilder authenticationManagerBuilder;

  @PostMapping("/authenticate")
  // public ResponseEntity<TokenDTO> authorize(@Valid @RequestBody OperatorDTO
  // operatorDTO) {
  public ResponseEntity<TokenDTO> authorize(@Valid @RequestBody LoginDTO loginDTO) {
    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
        // operatorDTO.getLoginId(), operatorDTO.getOperPswd());
        loginDTO.getUsername(), loginDTO.getPassword());

    // authenticationManagerBuilder가 호출되면서 CustomUserDetailService가 로드됨.
    Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = tokenProvider.createToken(authentication);

    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

    return new ResponseEntity<>(new TokenDTO(jwt), httpHeaders, HttpStatus.OK);
  }
}
