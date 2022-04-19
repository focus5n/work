@Controller
public class ServerController {

  @RequestMapping("/")
  public String home() {
    return "home";
  }
  
}
