package com.synergisticit.restclient;

import com.synergisticit.integration.dto.RoomType;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

@Component
public class RoomTypeRestClientImpl implements RoomTypeRestClient {

    private static final String ROOM_TYPE_URL = "http://localhost:8383/api/roomtype/";

    private final RestTemplate restTemplate;

    public RoomTypeRestClientImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public List<RoomType> findAll() {

        return Arrays.asList(Objects.requireNonNull(restTemplate.getForObject(ROOM_TYPE_URL, RoomType[].class)));
    }
}
