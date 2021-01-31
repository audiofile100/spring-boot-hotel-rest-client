package com.synergisticit.service;

import com.synergisticit.integration.dto.Customer;
import com.synergisticit.integration.dto.User;
import com.synergisticit.repository.CustomerRepository;
import org.springframework.stereotype.Service;import java.util.Optional;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository repo;

    public CustomerServiceImpl(CustomerRepository repo) {
        this.repo = repo;
    }

    @Override
    public Customer save(Customer customer) {
        return repo.save(customer);
    }

    @Override
    public Optional<Customer> findById(long id) {
        return repo.findById(id);
    }

    @Override
    public Customer findByUser(User user) {
        return repo.findByUser(user);
    }
}
