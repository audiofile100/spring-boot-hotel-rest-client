package com.synergisticit.utilities;

import com.synergisticit.integration.dto.Customer;
import com.synergisticit.integration.dto.User;
import com.synergisticit.service.CustomerService;
import com.synergisticit.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class RestClientUtilities {

    @Autowired
    UserService userService;

    @Autowired
    CustomerService customerService;

    public HttpHeaders getJsonHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.add("Accept", MediaType.APPLICATION_JSON_VALUE);
        headers.setContentType(MediaType.APPLICATION_JSON);
        return headers;
    }

    public Customer getCurrentCustomer() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        User u = userService.findByUsername(currentPrincipalName);
        return customerService.findByUser(u);
    }
}
