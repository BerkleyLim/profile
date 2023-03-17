package profile.back.web.json;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import profile.back.service.UserService;

// @RestController
// @RequestMapping("/api")
public class UserController {
  // private final UserService userService;

  // public UserController(UserService userService) {
  // this.userService = userService;
  // }

  // @GetMapping("/hello")
  // public ResponseEntity<String> hello() {
  // return ResponseEntity.ok("hello");
  // }

  // @PostMapping("/test-redirect")
  // public void testRedirect(HttpServletResponse response) throws IOException {
  // response.sendRedirect("/api/user");
  // }

  // @PostMapping("/signup")
  // public ResponseEntity<UserDto> signup(
  // @Validated @RequestBody UserDto userDto) {
  // return ResponseEntity.ok(userService.signup(userDto));
  // }

  // // PreAuthorize를 통하여 USER, ADMIN 권한 전부 호출 가능
  // @GetMapping("/user")
  // @PreAuthorize("hasAnyRole('USER','ADMIN')")
  // public ResponseEntity<UserDto> getMyUserInfo(HttpServletRequest request) {
  // return ResponseEntity.ok(userService.getMyUserWithAuthorities());
  // }

  // // PreAuthorize를 통하여 ADMIN 권한만 호출 가능
  // @GetMapping("/user/{username}")
  // @PreAuthorize("hasAnyRole('ADMIN')")
  // public ResponseEntity<UserDto> getUserInfo(@PathVariable String username) {
  // return ResponseEntity.ok(userService.getUserWithAuthorities(username));
  // }
}