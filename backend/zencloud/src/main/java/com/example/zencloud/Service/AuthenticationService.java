package com.example.zencloud.Service;

import java.util.HashMap;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.zencloud.Dto.request.AuthenticationRequest;
import com.example.zencloud.Dto.request.RegisterRequest;
import com.example.zencloud.Model.Role;
import com.example.zencloud.Model.User;
import com.example.zencloud.Repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationService {

        private final UserRepository userRepository;
        private final PasswordEncoder passwordEncoder;
        private final JwtService jwtService;
        private final AuthenticationManager authenticationManager;

        public ResponseEntity<HashMap<String, Object>> register(RegisterRequest request) {
                var user = User
                                .builder()
                                .name(request.getName())
                                .email(request.getEmail())
                                .password(passwordEncoder.encode(request.getPassword()))
                                .phone(request.getPhone())
                                .role(Role.USER)
                                .build();

                userRepository.save(user);
                var jwtToken = jwtService.generateToken(user);
                HashMap<String, Object> map = new HashMap<>();

                map.put("user", user);
                map.put("token", jwtToken);
                return ResponseEntity.ok().body(map);
        }

        public ResponseEntity<HashMap<String, Object>> authenticate(AuthenticationRequest request) {
                try {
                        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),
                                        request.getPassword()));

                        var user = userRepository.findByEmail(request.getEmail()).orElse(null);

                        var jwtToken = jwtService.generateToken(user);
                        HashMap<String, Object> map = new HashMap<>();
                        map.put("user", user);
                        map.put("token", jwtToken);
                        map.put("message", "Authentication Successfull");
                        return ResponseEntity.ok().body(map);

                } catch (AuthenticationException a) {
                        HashMap<String, Object> map = new HashMap<>();
                        var user = userRepository.findByEmail(request.getEmail()).orElse(null);
                        if (user == null) {
                                map.put("message", "User not found!");

                        } else {
                                map.put("message", "Invalid credentials");
                        }
                        return ResponseEntity.status(401).body(map);
                }

        }

}
