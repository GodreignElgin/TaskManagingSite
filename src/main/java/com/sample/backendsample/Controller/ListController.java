package com.sample.backendsample.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.sample.backendsample.Model.ListModel;
import com.sample.backendsample.Service.ListService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/lists")
public class ListController {

    @Autowired
    private ListService listService;

    @PostMapping
    public ResponseEntity<ListModel> createList(@RequestBody ListModel list) {
        ListModel createdList = listService.createList(list);
        return ResponseEntity.ok(createdList);
    }

    @GetMapping
    public ResponseEntity<List<ListModel>> getAllLists() {
        List<ListModel> lists = listService.getAllLists();
        return ResponseEntity.ok(lists);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ListModel> getListById(@PathVariable Long id) {
        Optional<ListModel> list = listService.getListById(id);
        return list.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/workspace/{workspaceId}")
    public ResponseEntity<List<ListModel>> getListsByWorkspaceId(@PathVariable long workspaceId) {
        List<ListModel> lists = listService.getListsByWorkspaceId(workspaceId);
        if (lists.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(lists);
    }

    @GetMapping("/name/{listName}")
    public ResponseEntity<ListModel> getListByName(@PathVariable String listName) {
        Optional<ListModel> list = listService.getListByName(listName);
        return list.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ListModel> updateListById(@PathVariable Long id, @RequestBody ListModel listDetails) {
        Optional<ListModel> updatedList = listService.updateListById(id, listDetails);
        return updatedList.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteListById(@PathVariable Long id) {
        listService.deleteListById(id);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/name/{listName}")
    public ResponseEntity<Void> deleteListByName(@PathVariable String listName) {
        listService.deleteListByName(listName);
        return ResponseEntity.noContent().build();
    }
}
