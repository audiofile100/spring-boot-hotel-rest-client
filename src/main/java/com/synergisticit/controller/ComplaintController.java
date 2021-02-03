package com.synergisticit.controller;

import com.synergisticit.integration.dto.Complaint;
import com.synergisticit.service.ComplaintService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ComplaintController {

    private final ComplaintService complaintService;

    public ComplaintController(ComplaintService complaintService) {
        this.complaintService = complaintService;
    }

    @PostMapping(value = "/complaint")
    public ResponseEntity<?> saveComplaint(@RequestBody Complaint complaint) {

        return new ResponseEntity<>(complaintService.save(complaint), HttpStatus.OK);
    }

    @GetMapping(value = "/complaint")
    public ResponseEntity<?> getAllComplaints() {

        return new ResponseEntity<>(complaintService.findAll(), HttpStatus.OK);
    }
}
