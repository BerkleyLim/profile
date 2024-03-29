package profile.back.common.error;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.annotation.JsonValue;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CommonErrorCode implements ErrorCode {

  INVALID_PARAMETER(HttpStatus.BAD_REQUEST, "Invalid parameter included"),
  RESOURCE_NOT_FOUND(HttpStatus.NOT_FOUND, "Resource not exists"),
  INTERNAL_SERVER_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "Internal server error"),
  FORBIDDEN(HttpStatus.FORBIDDEN, "Forbidden"),
  UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "Unauthorized");

  private final HttpStatus httpStatus;
  private final String message;
}
