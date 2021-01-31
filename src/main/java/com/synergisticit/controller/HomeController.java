package com.synergisticit.controller;

import com.synergisticit.integration.dto.Customer;
import com.synergisticit.utilities.RestClientUtilities;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Slf4j
@Controller
public class HomeController {

    @Autowired
    RestClientUtilities util;

    @GetMapping(value = {"/","/home"})
    public String getHomePage(Model model) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        model.addAttribute("currentUser", currentPrincipalName);

        Customer c = util.getCurrentCustomer();
        if (c != null) {
            model.addAttribute("cid", c.getCid());
        }

        return "home";
    }
}
