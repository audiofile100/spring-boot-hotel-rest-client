package com.synergisticit.controller;

import com.synergisticit.integration.dto.HotelReview;
import com.synergisticit.restclient.HotelReviewRestClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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
}
