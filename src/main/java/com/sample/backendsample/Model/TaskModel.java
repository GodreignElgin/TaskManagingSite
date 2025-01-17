package com.sample.backendsample.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class TaskModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long taskId;
    private String taskKey;
    private String taskName;
    private String taskDesc;
    private Integer priority;
    private String taskStatus;
    private Date createdDate;
    private Date dueDate;
    private Long listId;
    public static String generateTaskKey(Long id) {
        return String.format("TSK%03d", id);
    }
}
