package com.sample.backendsample.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.backendsample.Model.TaskModel;
import com.sample.backendsample.Repository.TaskRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public TaskModel createTask(TaskModel task) {
        task = taskRepository.save(task);
        task.setTaskKey(TaskModel.generateTaskKey(task.getTaskId()));
        return taskRepository.save(task);
    } 

    public List<TaskModel> getTasksByListId(Long listId) {
        return taskRepository.findByListId(listId);
    }

    public Optional<TaskModel> getTaskById(Long taskId) {
        return taskRepository.findById(taskId);
    }

    public Optional<TaskModel> getTaskByName(String taskName) {
        return taskRepository.findByTaskName(taskName);
    }

    public List<TaskModel> getAllTasks() {
        return taskRepository.findAll();
    }

    public Optional<TaskModel> updateTaskById(Long taskId, TaskModel taskDetails) {
        return taskRepository.findById(taskId).map(task -> {
            if (taskDetails.getTaskName() != null) {
                task.setTaskName(taskDetails.getTaskName());
            }
            if (taskDetails.getTaskDesc() != null) {
                task.setTaskDesc(taskDetails.getTaskDesc());
            }
            if (taskDetails.getTaskStatus() != null) {
                task.setTaskStatus(taskDetails.getTaskStatus());
            }
            if (taskDetails.getCreatedDate() != null) {
                task.setCreatedDate(taskDetails.getCreatedDate());
            }
            if (taskDetails.getPriority() != null){
                task.setPriority(taskDetails.getPriority());
            }
            if (taskDetails.getDueDate() != null) {
                task.setDueDate(taskDetails.getDueDate());
            }
            if (taskDetails.getListId() != null) {
                task.setListId(taskDetails.getListId());
            }
            return taskRepository.save(task);
        });
    }
    

    // public Optional<TaskModel> updateTaskByName(String taskName, TaskModel taskDetails) {
    //     return taskRepository.findByTaskName(taskName).map(task -> {
    //         task.setTaskName(taskDetails.getTaskName());
    //         task.setTaskDesc(taskDetails.getTaskDesc());
    //         task.setPriority(taskDetails.getPriority());
    //         task.setTaskStatus(taskDetails.getTaskStatus());
    //         task.setCreatedDate(taskDetails.getCreatedDate());
    //         task.setDueDate(taskDetails.getDueDate());
    //         task.setAssigneeId(taskDetails.getAssigneeId());
    //         task.setListIdReference(taskDetails.getListIdReference());
    //         return taskRepository.save(task);
    //     });
    // }

    public void deleteTaskById(Long taskId) {
        taskRepository.deleteById(taskId);
    }

    public void deleteTaskByName(String taskName) {
        taskRepository.deleteByTaskName(taskName);
    }
}
