package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Booking;

import java.util.List;

public interface BookingRestClient {

    Booking save(Booking booking);

    Booking findById(int bookingId);

    List<Booking> findAllByCid(int cid);

    void cancelBooking(int bookingId);
}
