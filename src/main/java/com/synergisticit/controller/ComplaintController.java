package com.synergisticit.controller;

import com.synergisticit.integration.dto.Complaint;
import com.synergisticit.integration.dto.Faqs;
import com.synergisticit.integration.dto.Message;
import com.synergisticit.integration.dto.Response;
import com.synergisticit.service.ComplaintService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping(value = "/complaint/{cid}")
    public ResponseEntity<?> getComplaintsByCID(@PathVariable int cid) {

        return new ResponseEntity<>(complaintService.findAllByCid(cid), HttpStatus.OK);
    }

    @GetMapping(value = "/complaint/messages/{id}")
    public ResponseEntity<?> getMessagesById(@PathVariable int id) {

        Complaint c = complaintService.findById(id);
        if (c != null) {
            return new ResponseEntity<>(c.getInBox(), HttpStatus.OK);
        }
        return new ResponseEntity<>("complaint id not found", HttpStatus.NOT_FOUND);
    }

    @PutMapping(value = "/complaint/{id}")
    public ResponseEntity<?> updateMessage(@RequestBody Response response, @PathVariable int id) {

        Complaint c = complaintService.findById(id);
        if (c != null) {
            if (response.getAssignmentId() != 0) {
                c.setAssignedId(response.getAssignmentId());
            }
            if (response.getResponse().length() > 0) {
                List<Message> messages = c.getInBox();
                messages.get(messages.size()-1).setAnswer(response.getResponse());
                c.setInBox(messages);
            }
            if (response.getStatus() != null) {
                c.setStatus(response.getStatus());
            }
            return new ResponseEntity<>(complaintService.save(c), HttpStatus.OK);
        }
        return new ResponseEntity<>("complaint id not found", HttpStatus.NOT_FOUND);
    }
}
