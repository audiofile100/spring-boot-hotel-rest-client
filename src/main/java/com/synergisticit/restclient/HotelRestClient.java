package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Hotel;

import java.util.List;

public interface HotelRestClient {

    List<Hotel> findBySearch(String search);
}
