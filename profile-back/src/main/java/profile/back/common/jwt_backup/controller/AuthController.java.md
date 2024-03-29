package profile.back.common.jwt.controller;

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
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import profile.back.common.jwt.JwtFilter;
import profile.back.common.jwt.TokenProvider;
import profile.back.common.jwt.dto.TokenDTO;
import profile.back.common.jwt.dto.OperatorDTO;

@RestController
@RequiredArgsConstructor
public class AuthController {
  private final TokenProvider tokenProvider;
  private final AuthenticationManagerBuilder authenticationManagerBuilder;

  @PostMapping("/authenticate")
  public ResponseEntity<TokenDTO> authorize(@Valid @RequestBody OperatorDTO operatorDTO) {
    UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
        operatorDTO.getLoginId(), operatorDTO.getOperPswd());

    // authenticationManagerBuilder가 호출되면서 CustomUserDetailService가 로드됨.
    Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

    SecurityContextHolder.getContext().setAuthentication(authentication);
    String jwt = tokenProvider.createToken(authentication);

    HttpHeaders httpHeaders = new HttpHeaders();
    httpHeaders.add(JwtFilter.AUTHORIZATION_HEADER, "Bearer " + jwt);

    return new ResponseEntity<>(new TokenDTO(jwt), httpHeaders, HttpStatus.OK);
  }
}
