package com.synergisticit.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class QuestionsController {

    @GetMapping("/questions")
    public String getQueriesPage() {

        return "questions";
    }
}
