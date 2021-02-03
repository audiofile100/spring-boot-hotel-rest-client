package com.synergisticit.integration.dto;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "faqs")
public class Faqs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int faqId;

    private String question;

    @Lob @Basic(fetch = FetchType.LAZY)
    private String answer;
}
