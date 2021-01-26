package com.synergisticit.controller;

import com.synergisticit.restclient.HotelRestClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HotelController {

    private final HotelRestClient hotelRestClient;

    public HotelController(HotelRestClient hotelRestClient) {
        this.hotelRestClient = hotelRestClient;
    }

    @GetMapping(value = "/hotel", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> findHotelBySearch(@RequestParam String search) {

        return new ResponseEntity<>(hotelRestClient.findBySearch(search), HttpStatus.OK);
    }

    @GetMapping(value = "/hotelById", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> findHotelById(@RequestParam int id) {

        return new ResponseEntity<>(hotelRestClient.findById(id), HttpStatus.OK);
    }
}
