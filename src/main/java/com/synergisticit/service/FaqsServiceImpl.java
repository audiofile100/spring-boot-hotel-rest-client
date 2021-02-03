package com.synergisticit.service;

import com.synergisticit.integration.dto.Faqs;
import com.synergisticit.repository.FaqsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FaqsServiceImpl implements FaqsService {

    private final FaqsRepository repo;

    public FaqsServiceImpl(FaqsRepository repo) {
        this.repo = repo;
    }

    @Override
    public Faqs save(Faqs faqs) {
        return repo.save(faqs);
    }

    @Override
    public List<Faqs> findAll() {
        return repo.findAll();
    }
}
