package com.synergisticit.service;

import com.synergisticit.integration.dto.Complaint;
import com.synergisticit.repository.ComplaintRepository;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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

    @Override
    public List<Complaint> findAllByCid(int cid) {
        return repo.findAllByCid(cid);
    }

    @Override
    public Complaint findById(int complaintId) {
        Optional<Complaint> opt = repo.findById(complaintId);
        return opt.orElse(null);
    }
}
