package com.synergisticit.controller;

import com.synergisticit.integration.dto.HotelReview;
import com.synergisticit.restclient.HotelReviewRestClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class HotelReviewController {

    private final HotelReviewRestClient restClient;

    public HotelReviewController(HotelReviewRestClient restClient) {
        this.restClient = restClient;
    }

    @PostMapping(value = "/hotelreview")
    public ResponseEntity<?> saveHotelReview(@RequestBody HotelReview review) {

        return new ResponseEntity<>(restClient.save(review), HttpStatus.OK);
    }

    @GetMapping(value = "/hotelreview/{id}")
    public ResponseEntity<?> getHotelReviewsByhid(@PathVariable int id) {

        return new ResponseEntity<>(restClient.findHotelReviewsById(id), HttpStatus.OK);
    }

    @GetMapping(value = "/hotelreview/{cid}/{hid}")
    public ResponseEntity<?> getHotelReviewsByCidHid(@PathVariable long cid, @PathVariable int hid) {

        return new ResponseEntity<>(restClient.findByCidHid(cid, hid), HttpStatus.OK);
    }
}
