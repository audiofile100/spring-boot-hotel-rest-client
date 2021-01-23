package com.synergisticit.integration.dto;

import lombok.Data;

import java.util.HashSet;
import java.util.Set;

@Data
public class Hotel {

    private int hotelId;
    private String hotelName;
    private String address;
    private String city;
    private String state;
    private int starRating;
    private double averagePrice;
    private Set<Amenities> amenities = new HashSet<>();
    private double discount;
    private String description;
    private String email;
    private String mobile;
    private String imageURL;
    private int timesBooked;
    private Set<HotelRoom> hotelRooms = new HashSet<>();
    private Set<String> hotelAmenityNames = new HashSet<>();

}
