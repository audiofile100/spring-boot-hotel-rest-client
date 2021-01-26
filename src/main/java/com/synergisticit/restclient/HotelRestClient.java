package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Hotel;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface HotelRestClient {

    List<Hotel> findBySearch(String search);
    ResponseEntity<Hotel> findById(int id);
}
