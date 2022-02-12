package com.ogs.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ogs.model.Message;

public interface MessageRepository extends JpaRepository<Message,Long> {


}
