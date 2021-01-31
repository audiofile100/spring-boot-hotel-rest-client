package com.synergisticit.service;

import com.synergisticit.integration.dto.Customer;
import com.synergisticit.integration.dto.User;

import java.util.Optional;

public interface CustomerService {

    Customer save(Customer customer);

    Optional<Customer> findById(long id);

    Customer findByUser(User user);
}
