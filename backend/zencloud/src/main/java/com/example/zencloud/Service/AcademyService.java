package com.example.zencloud.Service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import com.example.zencloud.Repository.AcademiesRepository;
import com.example.zencloud.Model.Academies;

import java.util.List;

@Service
public class AcademyService {
    @Autowired
    private AcademiesRepository academyRepository;

    public ResponseEntity<String> addAcademy(Academies academy, boolean isAdmin) {
        if (academy != null && isAdmin) {

            academyRepository.save(academy);
            return ResponseEntity.ok().body("Academy Added");
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }

    public ResponseEntity<?> getCourses(Long id) {
        Academies academy = academyRepository.findById(id).orElse(null);
        if (academy != null) {
            return ResponseEntity.ok(academy.getCourses());
        }
        return ResponseEntity.status(404).body("Academy not found");
    }

    public ResponseEntity<String> updateAcademyDetails(Long academyId, Academies updatedAcademy, Boolean isAdmin) {
        Academies existingAcademy = getAcademyById(academyId);

        if (existingAcademy != null && isAdmin) {
            existingAcademy.setName(updatedAcademy.getName());
            existingAcademy.setCity(updatedAcademy.getCity());
            existingAcademy.setCountry(updatedAcademy.getCountry());
            existingAcademy.setState(updatedAcademy.getState());
            existingAcademy.setRatings(updatedAcademy.getRatings());

            academyRepository.save(existingAcademy);
            return ResponseEntity.ok().body("Academy Updated");
        }

        return ResponseEntity.status(403).body("Access Restricted");

    }

    public ResponseEntity<String> deleteAcademy(Long academyId, Boolean isAdmin) {
        Academies existingAcademy = getAcademyById(academyId);

        if (existingAcademy != null && isAdmin) {
            academyRepository.delete(existingAcademy);
            return ResponseEntity.ok().body("Academy Deleted");
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }

    public Academies getAcademyById(Long academyId) {
        return academyRepository.findById(academyId).orElse(null);
    }

    public List<Academies> getAllAcademies() {
        return academyRepository.findAll();
    }
}