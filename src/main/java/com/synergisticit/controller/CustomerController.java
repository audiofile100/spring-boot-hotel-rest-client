package com.synergisticit.controller;

import com.synergisticit.service.CustomerService;
import com.synergisticit.utilities.RestClientUtilities;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {

    private final CustomerService service;
    private final RestClientUtilities util;

    public CustomerController(CustomerService service, RestClientUtilities util) {
        this.service = service;
        this.util = util;
    }

    @GetMapping("/api/customer/")
    public ResponseEntity<?> getCustomer() {

        return new ResponseEntity<>(util.getCurrentCustomer(), HttpStatus.OK);
    }
}
