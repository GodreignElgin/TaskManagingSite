package com.sample.backendsample.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.backendsample.Model.NotificationModel;

public interface NotificationRepo extends JpaRepository<NotificationModel, Long> {
}
