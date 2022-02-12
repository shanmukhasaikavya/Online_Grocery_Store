package com.ogs.service;

import java.util.List;

import com.ogs.model.Message;

public interface MessageService {
	//send message from user to admin
	public Message sendMessage(Message message);
	
	//FOr amdin to get message from user
	public List<Message> getMessage();
}
