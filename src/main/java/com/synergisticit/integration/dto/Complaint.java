package com.synergisticit.integration.dto;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "complaint")
public class Complaint {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int complaintId;

    private int cid;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Message> inBox;

    private LocalDate raisedOn;
    private String status;

    private int assignedId;
}
