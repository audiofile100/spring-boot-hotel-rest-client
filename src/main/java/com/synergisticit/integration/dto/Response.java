package com.synergisticit.integration.dto;

import lombok.Data;

@Data
public class Response {

    private int complaintId;
    private int assignmentId;
    private String response;
    private String status;
}
