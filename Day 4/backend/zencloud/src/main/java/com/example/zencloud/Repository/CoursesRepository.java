package com.example.zencloud.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.zencloud.Model.Courses;

public interface CoursesRepository extends JpaRepository<Courses, Long> {

}