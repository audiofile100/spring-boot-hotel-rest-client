package com.synergisticit.service;

import com.synergisticit.integration.dto.User;

public interface UserService {

    User save(User user);
    User findByUsername(String username);
}
