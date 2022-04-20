package com.cosla.ggcafe.controller;

import com.cosla.ggcafe.model.Match;
import com.cosla.ggcafe.service.MatchService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MatchController {

  @Autowired
  MatchService matchService;

  @PostMapping("/match")
  public Match createMatch(@RequestBody Match match) {
    return matchService.createMatch(match);
  }

}
