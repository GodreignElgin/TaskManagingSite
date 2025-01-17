package com.sample.backendsample.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.backendsample.Model.Token;

import java.util.List;
import java.util.Optional;

public interface TokenRepo extends JpaRepository<Token, String> {

    Optional<Token> findByToken(String token);

    List<Token> findAllByUser_IdAndExpiredFalseAndRevokedFalse(Long id);
}
