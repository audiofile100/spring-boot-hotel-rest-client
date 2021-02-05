package com.synergisticit.integration.dto;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "message")
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mid;
    private LocalDate date;
    private String query;
    private String answer;
}
