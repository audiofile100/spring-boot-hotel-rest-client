package com.synergisticit.service;

import com.synergisticit.integration.dto.Faqs;

import java.util.List;

public interface FaqsService {

    Faqs save(Faqs faqs);

    List<Faqs> findAll();
}
