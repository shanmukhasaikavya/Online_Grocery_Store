package com.ogs.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ogs.model.Message;
import com.ogs.repo.MessageRepository;
import com.ogs.service.MessageService;

@Service
public class MessageServiceImpl implements MessageService{
	@Autowired
	MessageRepository messageRepository;
	//send message to admin
	@Override
	public Message sendMessage(Message message) {
		return messageRepository.save(message);
	}
	//FOr admin to get message from users
	
	@Override
	public List<Message> getMessage() 
	{
		return messageRepository.findAll();
	}
	
	


	
}
