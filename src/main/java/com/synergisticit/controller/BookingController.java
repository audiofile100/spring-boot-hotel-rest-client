package com.synergisticit.controller;

import com.synergisticit.integration.dto.Booking;
import com.synergisticit.restclient.BookingRestClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
public class BookingController {

    private final BookingRestClient restClient;

    public BookingController(BookingRestClient restClient) {
        this.restClient = restClient;
    }

    @PostMapping("/booking")
    public ResponseEntity<?> bookHotel(@RequestBody Booking booking) {
        log.debug("booking: " + booking.getHotelId() + ", " + booking.getTotalGuests() + ", " + booking.getTotalRooms());
        return new ResponseEntity<>(restClient.save(booking), HttpStatus.OK);
    }
}
