package com.sample.backendsample.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sample.backendsample.Model.TaskModel;
import com.sample.backendsample.Service.TaskService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @PostMapping
    public ResponseEntity<TaskModel> createTask(@RequestBody TaskModel task) {
        TaskModel createdTask = taskService.createTask(task);
        return ResponseEntity.ok(createdTask);
    }

    @GetMapping
    public ResponseEntity<List<TaskModel>> getAllTasks() {
        List<TaskModel> tasks = taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/list/{listId}")
    public ResponseEntity<List<TaskModel>> getTasksByListId(@PathVariable long listId) {
        List<TaskModel> tasks = taskService.getTasksByListId(listId);
        if (tasks.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(tasks);
    }

    @GetMapping("/{id}")
    public ResponseEntity<TaskModel> getTaskById(@PathVariable Long id) {
        Optional<TaskModel> task = taskService.getTaskById(id);
        return task.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/name/{taskName}")
    public ResponseEntity<TaskModel> getTaskByName(@PathVariable String taskName) {
        Optional<TaskModel> task = taskService.getTaskByName(taskName);
        return task.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<TaskModel> updateTaskById(@PathVariable Long id, @RequestBody TaskModel taskDetails) {
        Optional<TaskModel> updatedTask = taskService.updateTaskById(id, taskDetails);
        return updatedTask.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // @PutMapping("/name/{taskName}")
    // public ResponseEntity<TaskModel> updateTaskByName(@PathVariable String taskName, @RequestBody TaskModel taskDetails) {
    //     Optional<TaskModel> updatedTask = taskService.updateTaskByName(taskName, taskDetails);
    //     return updatedTask.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    // }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTaskById(@PathVariable Long id) {
        taskService.deleteTaskById(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/name/{taskName}")
    public ResponseEntity<Void> deleteTaskByName(@PathVariable String taskName) {
        taskService.deleteTaskByName(taskName);
        return ResponseEntity.noContent().build();
    }
}