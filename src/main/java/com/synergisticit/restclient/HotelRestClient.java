package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Hotel;
import com.synergisticit.integration.dto.HotelRoom;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface HotelRestClient {

    List<Hotel> findBySearch(String search);
    ResponseEntity<Hotel> findById(int id);
    List<HotelRoom> getHotelRooms(int hotelId);

    List<HotelRoom> removeRooms(int hotelId, int typeId, int noRooms);
    List<HotelRoom> addRooms(int hotelId, int typeId, int noRooms);
}
