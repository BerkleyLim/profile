package profile.back.common.jwt;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;

import profile.back.common.error.CommonErrorCode;
import profile.back.common.error.ErrorCode;
// import profile.back.common.response.ResVO;

@Component
public class JwtAccessDeniedHandler implements AccessDeniedHandler {
  private final Logger logger = LoggerFactory.getLogger(JwtAccessDeniedHandler.class);

  @Override
  public void handle(HttpServletRequest request, HttpServletResponse response,
      AccessDeniedException accessDeniedException) throws IOException, ServletException {
    PrintWriter writer = response.getWriter();
    ErrorCode errorCode = CommonErrorCode.FORBIDDEN;
    logger.info(errorCode.getMessage());
    // ResVO res = ResVO.builder()
    // .status(errorCode.getResultCode())
    // .message(errorCode.getResultMsg()).build();
    try {
      response.setContentType(MediaType.APPLICATION_JSON_VALUE);
      // writer.write(CmmnVar.GSON.toJson(res));
    } catch (NullPointerException e) {
      logger.error("응답 메시지 작성 에러", e);
    } finally {
      if (writer != null) {
        writer.flush();
        writer.close();
      }
    }
    // response.getWriter().write(CmmnVar.GSON.toJson(res));
  }
}
