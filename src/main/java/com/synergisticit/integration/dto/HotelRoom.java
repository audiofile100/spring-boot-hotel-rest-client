package com.synergisticit.integration.dto;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class HotelRoom {

    private int hotelRoomId; //PK
    private RoomType type;
    private Set<Amenities> amenities;
    private int noRooms;
    private float price;
    private float discount;
    private String description;
    private String policies;
    private String hotelName;
    private String roomType;
    private Set<String> hotelRoomAmenityNames = new HashSet<>();
}
