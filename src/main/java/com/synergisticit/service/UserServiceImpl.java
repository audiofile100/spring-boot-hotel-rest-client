package com.synergisticit.service;

import com.synergisticit.integration.dto.User;
import com.synergisticit.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service(value = "jpaUserService")
public class UserServiceImpl implements UserService {

    @Autowired
    UserRepository repo;

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Override
    public User save(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        return repo.save(user);
    }

    @Override
    public User findByUsername(String username) {

        return repo.findUserByUsername(username);
    }
}
