package profile.back.web.json;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleErrorController {
  // @RequestMapping(path = "/error")
  // public Map<String, Object> handle(HttpServletRequest request) {
  // Map<String, Object> map = new HashMap<String, Object>();
  // map.put("status", request.getAttribute("javax.servlet.error.status_code"));
  // map.put("reason", request.getAttribute("javax.servlet.error.message"));
  // return map;
  // }
}
