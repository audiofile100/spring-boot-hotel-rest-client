package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Booking;
import com.synergisticit.utilities.RestClientUtilities;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

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
}
