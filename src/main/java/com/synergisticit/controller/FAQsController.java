package com.synergisticit.controller;

import com.synergisticit.service.FaqsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class FAQsController {

    private final FaqsService faqsService;

    public FAQsController(FaqsService faqsService) {
        this.faqsService = faqsService;
    }

    @GetMapping(value = "/faqs")
    public ResponseEntity<?> getAllFAQs() {

        return new ResponseEntity<>(faqsService.findAll(), HttpStatus.OK);
    }
}
