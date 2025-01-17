package com.sample.backendsample.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.backendsample.Model.WorkspaceModel;
import com.sample.backendsample.Repository.WorkspaceRepo;

import java.util.List;
import java.util.Optional;

@Service
public class WorkspaceService {

    @Autowired
    private WorkspaceRepo workspaceRepository;

    public WorkspaceModel createWorkspace(WorkspaceModel workspace) {
        workspace.setWorkspaceKey(WorkspaceModel.generateWorkspaceKey(workspace.getWorkspaceId()));
        return workspaceRepository.save(workspace);
    }

    public Optional<WorkspaceModel> getWorkspaceById(Long workspaceId) {
        return workspaceRepository.findById(workspaceId);
    }

    public Optional<WorkspaceModel> getWorkspaceByName(String workspaceName) {
        return workspaceRepository.findByWorkspaceName(workspaceName);
    }

    public List<WorkspaceModel> getAllWorkspaces() {
        return workspaceRepository.findAll();
    }

    public Optional<WorkspaceModel> updateWorkspaceById(Long workspaceId, WorkspaceModel workspaceDetails) {
        return workspaceRepository.findById(workspaceId).map(workspace -> {
            if (workspaceDetails.getWorkspaceName() != null) {
                workspace.setWorkspaceName(workspaceDetails.getWorkspaceName());
            }
            if (workspaceDetails.getWorkspaceKey() != null) {
                workspace.setWorkspaceKey(workspaceDetails.getWorkspaceKey());
            }
            if (workspaceDetails.getWorkspaceDesc() != null) {
                workspace.setWorkspaceDesc(workspaceDetails.getWorkspaceDesc());
            }
            return workspaceRepository.save(workspace);
        });
    }

    public void deleteWorkspaceById(Long workspaceId) {
        workspaceRepository.deleteById(workspaceId);
    }

    public void deleteWorkspaceByName(String workspaceName) {
        workspaceRepository.deleteByWorkspaceName(workspaceName);
    }
}
