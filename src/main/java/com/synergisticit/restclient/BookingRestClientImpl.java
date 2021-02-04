package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Booking;
import com.synergisticit.integration.dto.Hotel;
import com.synergisticit.utilities.RestClientUtilities;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Component
public class BookingRestClientImpl implements BookingRestClient {

    private static final String BOOKING_URL = "http://localhost:8484/api/booking/";

    private final RestTemplate restTemplate;
    private final RestClientUtilities util;

    public BookingRestClientImpl(RestTemplate restTemplate, RestClientUtilities util) {
        this.restTemplate = restTemplate;
        this.util = util;
    }

    @Override
    public Booking save(Booking booking) {

        HttpEntity<Booking> requestBody = new HttpEntity<>(booking, util.getJsonHeaders());

        return restTemplate.postForObject(BOOKING_URL, requestBody, Booking.class);
    }

    @Override
    public Booking findById(int bookingId) {

        return restTemplate.getForObject(BOOKING_URL + bookingId, Booking.class);
    }

    @Override
    public List<Booking> findAllByCid(int cid) {

        return Arrays.asList(Objects.requireNonNull(restTemplate.getForObject(BOOKING_URL + "cid/" + cid, Booking[].class)));
    }

    @Override
    public void cancelBooking(int bookingId) {

        restTemplate.put(BOOKING_URL + bookingId, Booking.class);
    }
}
