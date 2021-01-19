package com.synergisticit.restclient;

import com.synergisticit.integration.dto.RoomType;

import java.util.List;

public interface RoomTypeRestClient {

    List<RoomType> findAll();
}
