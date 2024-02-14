package com.example.zencloud.Controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import com.example.zencloud.Service.AcademyService;
import com.example.zencloud.Service.JwtService;
import com.example.zencloud.Service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.zencloud.Model.Academies;

import java.util.List;
import com.example.zencloud.Model.Role;

import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/academies")
public class AcademyController {
    @Autowired
    private AcademyService academyService;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<Academies> getAcademy() {
        return academyService.getAllAcademies();
    }

    @GetMapping("/courses/{id}")
    public ResponseEntity<?> getCourses(@PathVariable Long id) {
        return academyService.getCourses(id);
    }

    @GetMapping("/{id}")
    public Academies getAcademyById(@PathVariable Long id) {
        return academyService.getAcademyById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAcademyById(@PathVariable Long id,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return academyService.deleteAcademy(id, isAdmin);
    }

    @PostMapping("/")
    public ResponseEntity<String> addAcademy(@RequestBody Academies academy,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return academyService.addAcademy(academy, isAdmin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateAcademy(@RequestBody Academies academy,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return academyService.updateAcademyDetails(academy.getId(), academy, isAdmin);
    }

}