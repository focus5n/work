package com.cosla.ggcafe.controller;

import com.cosla.ggcafe.model.Match;
import com.cosla.ggcafe.service.MatchService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class MatchController {

  @Autowired
  private MatchService matchService;

  @PostMapping("/match")
  public Match createMatch(@RequestBody Match match) {
    return matchService.createMatch(match);
  }

  @GetMapping("/match/{id}")
  public Match getMatchById(@PathVariable Long id) {
    return matchService.getMatchById(id);
  }

}
