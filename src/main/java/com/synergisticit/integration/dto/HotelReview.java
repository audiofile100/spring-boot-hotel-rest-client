package com.synergisticit.integration.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class HotelReview {

    private long reviewId;

    private long cid;
    private int bookingId;
    private int hotelId;

    private int cleanliness;
    private int service;
    private int property;
    private int amenities;
    private int atmosphere;
    private double overall;

    private String comments;
    private String displayName;
}
