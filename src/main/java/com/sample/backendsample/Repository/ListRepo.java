package com.sample.backendsample.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.backendsample.Model.ListModel;

public interface ListRepo extends JpaRepository<ListModel, Long> { 
    Optional<ListModel> findByListName(String listName);
    void deleteByListName(String listName);
    List<ListModel> findByWorkspaceId(Long workspaceId);
}
