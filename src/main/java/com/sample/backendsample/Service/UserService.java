package com.sample.backendsample.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sample.backendsample.Model.UserModel;
import com.sample.backendsample.Repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public UserModel createUser(UserModel user) {
        return userRepository.save(user);
    }

    public Optional<UserModel> updateUser(Long userId, UserModel userDetails) {
        return userRepository.findById(userId).map(user -> {
            user.setUserName(userDetails.getUserName());
            user.setPasswordHash(userDetails.getPasswordHash());
            user.setAdmin(userDetails.isAdmin());
            return userRepository.save(user);
        });
    }

    public void deleteUser(Long userId) {
        userRepository.deleteById(userId);
    }

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<UserModel> getUserById(Long userId) {
        return userRepository.findById(userId);
    }

    public Optional<UserModel> getUserByName(String userName) {
        return userRepository.findByUserName(userName);
    }    
}
