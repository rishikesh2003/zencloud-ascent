package com.example.zencloud.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.zencloud.Model.Courses;
import com.example.zencloud.Model.User;
import java.util.List;
import com.example.zencloud.Repository.CoursesRepository;
import com.example.zencloud.Repository.UserRepository;

@Service
public class CourseService {
    @Autowired
    private CoursesRepository coursesRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Courses> getAllCourses() {
        return coursesRepository.findAll();
    }

    public Courses getCourseById(Long id) {
        return coursesRepository.findById(id).orElse(null);
    }

    public ResponseEntity<String> deleteCourseById(Long id, boolean isAdmin) {
        Courses course = coursesRepository.findById(id).orElse(null);
        if (course != null && isAdmin) {
            coursesRepository.deleteById(id);
            return ResponseEntity.ok().body("Course Deleted");
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }

    public ResponseEntity<String> addCourse(Courses course, boolean isAdmin) {
        if (course != null && isAdmin) {
            coursesRepository.save(course);
            return ResponseEntity.ok().body("Course added");
        }
        return ResponseEntity.status(403).body("Access restricted");
    }

    public ResponseEntity<String> registerCourse(Long userId, Long courseId) {
        User user = userRepository.findById(userId).orElse(null);
        Courses course = coursesRepository.findById(courseId).orElse(null);

        List<User> userList = course.getUsers();
        for (User u : userList) {
            if (u.getId() == userId) {
                return ResponseEntity.status(400).body("User is already registered with this course");
            }
        }
        course.getUsers().add(user);
        user.getCourses().add(course);
        coursesRepository.save(course);
        userRepository.save(user);
        return ResponseEntity.ok().body("User registered");
    }

    public ResponseEntity<String> withdrawCourse(Long userId, Long courseId) {
        User user = userRepository.findById(userId).orElse(null);
        Courses course = coursesRepository.findById(courseId).orElse(null);

        List<User> userList = course.getUsers();
        for (User u : userList) {
            if (u.getId() == userId) {

                userList.remove(user);
                course.setUsers(userList);
                coursesRepository.save(course);

                user.getCourses().remove(course);
                userRepository.save(user);

                return ResponseEntity.ok().body("Successfully withdrawn from course");
            }
        }
        return ResponseEntity.status(400).body("User is not registered for this course");
    }

    public ResponseEntity<String> updateCourseDetails(Long courseId, Courses course, Boolean isAdmin) {
        Courses existingCourse = coursesRepository.findById(courseId).orElse(null);

        if (existingCourse != null && isAdmin) {

            existingCourse.setName(course.getName());
            existingCourse.setTime(course.getTime());
            existingCourse.setDate(course.getDate());
            existingCourse.setDescription(course.getDescription());
            existingCourse.setCourseFee(course.getCourseFee());
            existingCourse.setAddress(course.getAddress());
            existingCourse.setCity(course.getCity());
            existingCourse.setState(course.getState());
            existingCourse.setCountry(course.getCountry());

            coursesRepository.save(existingCourse);
            return ResponseEntity.ok().body("Course Updated");
        }

        return ResponseEntity.status(403).body("Access Restricted");

    }

    public ResponseEntity<?> getUsers(Long id) {
        Courses course = coursesRepository.findById(id).orElse(null);
        if (course != null) {
            return ResponseEntity.ok(course.getUsers());
        }
        return ResponseEntity.status(404).body("Academy not found");
    }

}
