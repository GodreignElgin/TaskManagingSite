package com.sample.backendsample.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.backendsample.Model.ListModel;
import com.sample.backendsample.Repository.ListRepo;

import java.util.List;
import java.util.Optional;

@Service
public class ListService {

    @Autowired
    private ListRepo listRepository;

    public ListModel createList(ListModel list) {
        list.setKeyId(ListModel.generateListKey(list.getListId())); // Assuming a method to generate key
        return listRepository.save(list);
    }

    public List<ListModel> getListsByWorkspaceId(Long workspaceId) {
        return listRepository.findByWorkspaceId(workspaceId);
    }

    public Optional<ListModel> getListById(Long listId) {
        return listRepository.findById(listId);
    }

    public Optional<ListModel> getListByName(String listName) {
        return listRepository.findByListName(listName);
    }

    public List<ListModel> getAllLists() {
        return listRepository.findAll();
    }

    public Optional<ListModel> updateListById(Long listId, ListModel listDetails) {
        return listRepository.findById(listId).map(list -> {
            if (listDetails.getListName() != null) {
                list.setListName(listDetails.getListName());
            }
            if (listDetails.getKeyId() != null) {
                list.setKeyId(listDetails.getKeyId());
            }
            if (listDetails.getWorkspaceId() != 0) {
                list.setWorkspaceId(listDetails.getWorkspaceId());
            }
            return listRepository.save(list);
        });
    }

    public void deleteListById(Long listId) {
        listRepository.deleteById(listId);
    }

    public void deleteListByName(String listName) {
        listRepository.deleteByListName(listName);
    }
}
