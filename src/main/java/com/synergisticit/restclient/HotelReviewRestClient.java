package com.synergisticit.restclient;

import com.synergisticit.integration.dto.HotelReview;

import java.util.List;

public interface HotelReviewRestClient {

    HotelReview save(HotelReview review);

    List<HotelReview> findHotelReviewsById(int hotelId);

    HotelReview findByCidHid(long cid, int hid);
}
