package com.example.zencloud.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.zencloud.Model.Courses;
import com.example.zencloud.Model.Role;
import com.example.zencloud.Model.User;
import com.example.zencloud.Service.CourseService;
import com.example.zencloud.Service.JwtService;
import com.example.zencloud.Service.UserService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/courses")
public class CourseController {
    @Autowired
    private CourseService courseService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<Courses> getAcademy() {
        return courseService.getAllCourses();
    }

    @GetMapping("/{id}")
    public Courses getCourseById(@PathVariable Long id) {
        return courseService.getCourseById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCourseById(@PathVariable Long id,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return courseService.deleteCourseById(id, isAdmin);
    }

    @PostMapping("/")
    public ResponseEntity<String> addCourse(@RequestBody Courses course,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return courseService.addCourse(course, isAdmin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateCourse(@RequestBody Courses course,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return courseService.updateCourseDetails(course.getId(), course, isAdmin);
    }

    @PostMapping("/register/{id}")
    public ResponseEntity<String> registerCourse(@RequestBody User user, @PathVariable Long id) {
        return courseService.registerCourse(user.getId(), id);
    }

    @DeleteMapping("/withdraw/{id}")
    public ResponseEntity<String> withdrawCourse(@PathVariable Long id, @RequestBody User user) {
        return courseService.withdrawCourse(user.getId(), id);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUsers(@PathVariable Long id) {
        return courseService.getUsers(id);
    }
}
