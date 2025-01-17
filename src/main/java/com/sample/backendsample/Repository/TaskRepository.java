package com.sample.backendsample.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.backendsample.Model.TaskModel;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<TaskModel, Long> {
    Optional<TaskModel> findByTaskName(String taskName);
    void deleteByTaskName(String taskName);
    List<TaskModel> findByListId(Long listId);
}
