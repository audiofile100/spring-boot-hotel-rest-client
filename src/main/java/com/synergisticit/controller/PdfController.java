package com.synergisticit.controller;

import com.synergisticit.integration.dto.Booking;
import com.synergisticit.restclient.BookingRestClient;
import com.synergisticit.service.MailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PdfController {

    private final MailService mailService;
    private final BookingRestClient restClient;

    public PdfController(MailService mailService, BookingRestClient restClient) {
        this.mailService = mailService;
        this.restClient = restClient;
    }

    @GetMapping(value = "/pdf/{bid}/{email}")
    public ResponseEntity<?> pdfReport(@PathVariable int bid, @PathVariable String email) {

        String from = "fremontsession@gmail.com";
        String sub = "Reservation details";
        String msg = "Thank you for your reservation. Enjoy your stay.";

        Booking booking = restClient.findById(bid);

        mailService.sendPdf(from, email, sub, msg, booking);

        return new ResponseEntity<>("sent email", HttpStatus.OK);
    }
}
