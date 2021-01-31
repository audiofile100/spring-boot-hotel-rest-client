package com.synergisticit.controller;

import com.synergisticit.integration.dto.Booking;
import com.synergisticit.restclient.BookingRestClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
public class BookingController {

    private final BookingRestClient restClient;

    public BookingController(BookingRestClient restClient) {
        this.restClient = restClient;
    }

    @PostMapping("/booking")
    public ResponseEntity<?> bookHotel(@RequestBody Booking booking) {

        return new ResponseEntity<>(restClient.save(booking), HttpStatus.OK);
    }

    @GetMapping(value = "/bookings/{cid}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> getAllBookings(@PathVariable int cid) {

        return new ResponseEntity<>(restClient.findAllByCid(cid), HttpStatus.OK);
    }

    @PutMapping(value = "/booking/{id}")
    public ResponseEntity<?> cancelTheBooking(@PathVariable int id) {

        restClient.cancelBooking(id);

        return new ResponseEntity<>("canceled the booking: " + id, HttpStatus.OK);
    }
}
