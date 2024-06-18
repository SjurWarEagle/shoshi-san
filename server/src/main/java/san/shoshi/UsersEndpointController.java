package san.shoshi;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController("")
public class UsersEndpointController {

    @GetMapping("/users/all")
    ArrayList<User> all() {
        ArrayList<User> rc = new ArrayList<>();
        rc.add(new User("a", "a"));
        rc.add(new User("b", "b"));
        rc.add(new User("c", "c"));
        return rc;
    }
}
