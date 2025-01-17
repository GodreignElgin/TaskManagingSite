package com.sample.backendsample.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.backendsample.Model.WorkspaceModel;

public interface WorkspaceRepo extends JpaRepository<WorkspaceModel, Long> { 
    Optional<WorkspaceModel> findByWorkspaceName(String workspaceName);
    void deleteByWorkspaceName(String workspaceName);
}