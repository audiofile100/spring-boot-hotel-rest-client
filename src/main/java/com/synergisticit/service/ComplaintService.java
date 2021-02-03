package com.synergisticit.service;

import com.synergisticit.integration.dto.Complaint;

import java.util.List;

public interface ComplaintService {

    Complaint save(Complaint complaint);

    List<Complaint> findAll();
}
