package com.synergisticit.service;

import com.synergisticit.integration.dto.Role;
import com.synergisticit.repository.RoleRepository;
import org.springframework.stereotype.Service;

@Service
public class RoleServiceImpl implements RoleService {

    private final RoleRepository repo;

    public RoleServiceImpl(RoleRepository repo) {
        this.repo = repo;
    }

    @Override
    public Role save(Role role) {
        return repo.save(role);
    }
}
