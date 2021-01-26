package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Hotel;
import com.synergisticit.utilities.RestClientUtilities;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Component
public class HotelRestClientImpl implements HotelRestClient {

    private static final String HOTEL_URL = "http://localhost:8383/api/hotel/";

    private final RestTemplate restTemplate;
    private final RestClientUtilities util;

    public HotelRestClientImpl(RestTemplate restTemplate, RestClientUtilities util) {
        this.restTemplate = restTemplate;
        this.util = util;
    }

    @Override
    public List<Hotel> findBySearch(String search) {

        String url = buildURL(search);

        return Arrays.asList(Objects.requireNonNull(restTemplate.getForObject(url, Hotel[].class)));
    }

    @Override
    public ResponseEntity<Hotel> findById(int id) {

        HttpEntity<Hotel> requestEntity = new HttpEntity<>(util.getJsonHeaders());

        return restTemplate.exchange(HOTEL_URL + id, HttpMethod.GET, requestEntity, Hotel.class);
    }

    private String buildURL(String search) {

        return HOTEL_URL + "?hotelName=" + search +
                "&city=" + search +
                "&state=" + search +
                "&address=" + search;
    }
}
