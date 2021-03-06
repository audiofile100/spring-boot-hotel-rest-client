package com.synergisticit.repository;

import com.synergisticit.integration.dto.Complaint;
import com.synergisticit.integration.dto.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComplaintRepository extends JpaRepository<Complaint, Integer> {

    List<Complaint> findAllByCid(int cid);
}
