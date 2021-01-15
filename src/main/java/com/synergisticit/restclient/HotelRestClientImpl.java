package com.synergisticit.restclient;

import com.synergisticit.integration.dto.Hotel;
import com.synergisticit.utilities.RestClientUtilities;
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

    public HotelRestClientImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public List<Hotel> findBySearch(String search) {

        String url = buildURL(search);

        return Arrays.asList(Objects.requireNonNull(restTemplate.getForObject(url, Hotel[].class)));
    }

    private String buildURL(String search) {
        StringBuilder sb = new StringBuilder(HOTEL_URL);
        sb.append("?hotelName=").append(search)
                .append("&city=").append(search)
                .append("&state=").append(search)
                .append("&address=").append(search);

        return sb.toString();
    }
}
