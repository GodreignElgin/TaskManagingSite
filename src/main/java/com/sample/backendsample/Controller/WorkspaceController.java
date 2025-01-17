package com.sample.backendsample.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sample.backendsample.Model.WorkspaceModel;
import com.sample.backendsample.Service.WorkspaceService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/workspaces")
public class WorkspaceController {

    @Autowired
    private WorkspaceService workspaceService;

    @PostMapping
    public ResponseEntity<WorkspaceModel> createWorkspace(@RequestBody WorkspaceModel workspace) {
        WorkspaceModel createdWorkspace = workspaceService.createWorkspace(workspace);
        return ResponseEntity.ok(createdWorkspace);
    }

    @GetMapping
    public ResponseEntity<List<WorkspaceModel>> getAllWorkspaces() {
        List<WorkspaceModel> workspaces = workspaceService.getAllWorkspaces();
        return ResponseEntity.ok(workspaces);
    }

    @GetMapping("/{id}")
    public ResponseEntity<WorkspaceModel> getWorkspaceById(@PathVariable Long id) {
        Optional<WorkspaceModel> workspace = workspaceService.getWorkspaceById(id);
        return workspace.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/name/{workspaceName}")
    public ResponseEntity<WorkspaceModel> getWorkspaceByName(@PathVariable String workspaceName) {
        Optional<WorkspaceModel> workspace = workspaceService.getWorkspaceByName(workspaceName);
        return workspace.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<WorkspaceModel> updateWorkspaceById(@PathVariable Long id, @RequestBody WorkspaceModel workspaceDetails) {
        Optional<WorkspaceModel> updatedWorkspace = workspaceService.updateWorkspaceById(id, workspaceDetails);
        return updatedWorkspace.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWorkspaceById(@PathVariable Long id) {
        workspaceService.deleteWorkspaceById(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/name/{workspaceName}")
    public ResponseEntity<Void> deleteWorkspaceByName(@PathVariable String workspaceName) {
        workspaceService.deleteWorkspaceByName(workspaceName);
        return ResponseEntity.noContent().build();
    }
}
