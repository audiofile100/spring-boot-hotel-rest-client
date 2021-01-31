package com.synergisticit.integration.dto;

import lombok.Data;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class Booking {

    private int bookingId;
    private int cid;
    private String customerMobile;
    private LocalDate checkInDate;
    private LocalDate checkOutDate;
    private int hotelId;
    private String hotelName;
    private String hotelImgUrl;
    private String roomType;
    private double roomPrice;
    private double discount;
    private LocalDate bookedOn;
    private String status;
    private int totalRooms;
    private int totalGuests;

    private List<Guest> guestList = new ArrayList<>();
}
