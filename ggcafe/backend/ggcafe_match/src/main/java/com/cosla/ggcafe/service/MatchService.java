package com.cosla.ggcafe.service;

import java.util.List;

import com.cosla.ggcafe.model.Match;
import com.cosla.ggcafe.repository.MatchRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchService {

  @Autowired
  MatchRepository matchRepository;

  public List<Match> getAllMatch() {
    return matchRepository.findAll();
  }

  public Match createMatch(Match match) {
    return matchRepository.save(match);
  }

}
