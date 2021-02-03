package com.synergisticit.repository;

import com.synergisticit.integration.dto.Faqs;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FaqsRepository extends JpaRepository<Faqs, Integer> {
}
