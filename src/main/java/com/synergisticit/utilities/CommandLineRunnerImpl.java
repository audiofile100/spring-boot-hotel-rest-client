package com.synergisticit.utilities;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.reflect.TypeToken;
import com.synergisticit.integration.dto.Customer;
import com.synergisticit.integration.dto.Role;
import com.synergisticit.integration.dto.User;
import com.synergisticit.service.CustomerService;
import com.synergisticit.service.RoleService;
import com.synergisticit.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;

import java.io.IOException;
import java.io.InputStream;
import java.lang.reflect.Type;
import java.nio.charset.StandardCharsets;
import java.util.List;

@Component
public class CommandLineRunnerImpl implements CommandLineRunner {

    private final ResourceLoader resourceLoader;
    private final UserService userService;
    private final RoleService roleService;
    private final CustomerService customerService;

    public CommandLineRunnerImpl(ResourceLoader resourceLoader, UserService userService, RoleService roleService, CustomerService customerService) {
        this.resourceLoader = resourceLoader;
        this.userService = userService;
        this.roleService = roleService;
        this.customerService = customerService;
    }

    @Override
    public void run(String... args) throws Exception {

        loadData("classpath:static/json/roles.json", "roles");
        loadData("classpath:static/json/users.json", "users");
        loadData("classpath:static/json/customers.json", "customers");
    }

    private void loadData(String path, String entity) throws Exception {

        Resource resource = resourceLoader.getResource(path);
        InputStream inputStream = resource.getInputStream();

        try {
            byte[] bdata = FileCopyUtils.copyToByteArray(inputStream);
            String data = new String(bdata, StandardCharsets.UTF_8);

            GsonBuilder gsonBuilder = null;
            Gson gson = null;
            Type listType = null;

            switch (entity) {
                case "roles":
                    gson = new Gson();
                    listType = new TypeToken<List<Role>>() {}.getType();
                    List<Role> roles = gson.fromJson(data, listType);

                    for (Role r : roles)
                        roleService.save(r);
                    break;

                case "users":
                    gson = new Gson();
                    listType = new TypeToken<List<User>>() {}.getType();
                    List<User> users = gson.fromJson(data, listType);

                    for (User u : users)
                        userService.save(u);
                    break;

                case "customers":
                    gson = new Gson();
                    listType = new TypeToken<List<Customer>>() {}.getType();
                    List<Customer> customers = gson.fromJson(data, listType);

                    for (Customer c : customers)
                        customerService.save(c);
                    break;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
