package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Booking;
import com.synergisticit.integration.dto.HotelReview;
import com.synergisticit.utilities.RestClientUtilities;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class HotelReviewRestClientImpl implements HotelReviewRestClient {

    private static final String HOTEL_REVIEW_URL = "http://localhost:8383/api/hotelreview/";

    private final RestTemplate restTemplate;
    private final RestClientUtilities utilities;

    public HotelReviewRestClientImpl(RestTemplate restTemplate, RestClientUtilities utilities) {
        this.restTemplate = restTemplate;
        this.utilities = utilities;
    }

    @Override
    public HotelReview save(HotelReview review) {

        HttpEntity<HotelReview> requestBody = new HttpEntity<>(review, utilities.getJsonHeaders());

        return restTemplate.postForObject(HOTEL_REVIEW_URL, requestBody, HotelReview.class);
    }
}
