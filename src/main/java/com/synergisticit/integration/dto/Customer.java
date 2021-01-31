package com.synergisticit.integration.dto;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long cid;
    private String name;
    private String mobile;
    private String email;

    @OneToOne
    @JoinColumn(name = "uid")
    private User user;
}
