package com.example.zencloud.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.zencloud.Model.User;
import com.example.zencloud.Repository.UserRepository;
import java.util.List;
import java.util.Optional;
import com.example.zencloud.Model.Role;

@Service
public class UserService {
    @Autowired
    private UserRepository usersRepository;

    public List<User> getAllUsers(boolean isAdmin) {
        if (isAdmin) {
            return usersRepository.findAll();
        }
        return null;
    }

    public Role getRoleByEmail(String email) {
        Optional<User> user = usersRepository.findByEmail(email);
        if (user.isPresent()) {
            User u = user.get();
            Role r = u.getRole();
            return r;
        }
        return null;
    }
}
