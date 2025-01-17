package com.sample.backendsample.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class ListModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long listId; // Renamed to listId for consistency and clarity
    private String keyId; // Assuming this is a unique key
    private String listName;
    private String listDesc;
    private Long workspaceId;

    // Static method to generate a key if needed
    public static String generateListKey(Long id) {
        return String.format("LIST%03d", id);
    }
}
