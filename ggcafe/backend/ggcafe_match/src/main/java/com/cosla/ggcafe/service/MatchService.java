package com.cosla.ggcafe.service;

import java.util.List;
import java.util.Optional;

import com.cosla.ggcafe.model.Match;
import com.cosla.ggcafe.repository.MatchRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class MatchService {

  @Autowired
  private MatchRepository matchRepository;

  public List<Match> getAllMatch() {
    return matchRepository.findAll();
  }

  public Match getMatchById(@PathVariable Long id) {
    Match match = matchRepository.findById(id);
    return ResponseEntity.ok(match);
  }

  public Match createMatch(@RequestBody Match match) {
    return matchRepository.save(match);
  }

}
