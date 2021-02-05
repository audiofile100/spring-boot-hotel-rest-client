package com.synergisticit.repository;

import com.synergisticit.integration.dto.Message;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Message, Integer> {

}
