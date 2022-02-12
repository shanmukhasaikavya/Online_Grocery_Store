package com.ogs.service;

import com.ogs.model.Password;
import com.ogs.model.User;

public interface UserService {
//creating user
	public User createUser(User user) throws Exception;

//checking login
	public User checkUser(String email, String password) throws Exception;
	
//change password
	public boolean changePassword(Password password);
	
	//change password
	public boolean forgotPassword(Password password) throws Exception;
}
