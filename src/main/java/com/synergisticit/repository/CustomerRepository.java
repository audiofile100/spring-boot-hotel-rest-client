package com.synergisticit.repository;

import com.synergisticit.integration.dto.Customer;
import com.synergisticit.integration.dto.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findByUser(User user);
}
