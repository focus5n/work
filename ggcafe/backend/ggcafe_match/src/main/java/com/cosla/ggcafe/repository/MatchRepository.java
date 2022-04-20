package com.cosla.ggcafe.repository;

import com.cosla.ggcafe.model.Match;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchRepository extends JpaRepository<Match, Long> {

  Match findById(Integer id);

}
