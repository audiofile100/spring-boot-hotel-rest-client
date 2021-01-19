package com.synergisticit.controller;

import com.synergisticit.restclient.RoomTypeRestClient;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RoomTypeController {

    private final RoomTypeRestClient roomTypeRestClient;

    public RoomTypeController(RoomTypeRestClient roomTypeRestClient) { this.roomTypeRestClient = roomTypeRestClient; }

    @GetMapping(value = "/roomtype", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> findAllRoomTypes() {

        return new ResponseEntity<>(roomTypeRestClient.findAll(), HttpStatus.OK);
    }
}
