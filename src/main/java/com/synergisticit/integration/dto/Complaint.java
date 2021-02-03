package com.synergisticit.integration.dto;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "complaint")
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int complaintId;

    private int cid;

    private String message;
    private LocalDate raisedOn;
    private String status;

    private int assignedId;
}
