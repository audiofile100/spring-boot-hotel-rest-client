package com.synergisticit.service;

import com.synergisticit.integration.dto.Complaint;
import com.synergisticit.repository.ComplaintRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintServiceImpl implements ComplaintService {

    private final ComplaintRepository repo;

    public ComplaintServiceImpl(ComplaintRepository repo) {
        this.repo = repo;
    }

    @Override
    public Complaint save(Complaint complaint) {
        return repo.save(complaint);
    }

    @Override
    public List<Complaint> findAll() {
        return repo.findAll();
    }
}
