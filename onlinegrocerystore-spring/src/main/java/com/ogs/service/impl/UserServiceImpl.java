package com.ogs.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ogs.model.Password;
import com.ogs.model.User;
import com.ogs.repo.UserRepository;
import com.ogs.service.UserService;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	private UserRepository userRepository;

//creating user
	public User createUser(User user) throws Exception {
		User usr = userRepository.findByEmail(user.getEmail());
		if (usr != null) {
			throw new Exception("User Already Exist");
		} else {
			usr = userRepository.save(user);
		}
		return usr;
	}

//check user is registered(login)
	public User checkUser(String email, String password) throws Exception {
		if (email.equals("admin@gmail.com") && password.equals("admin")) {
			User admin = new User(email);
			return admin;
		}
		User usr = userRepository.findByEmail(email);
		if (usr == null) {
			throw new Exception("User does not exist");
		}
		if (!usr.getPassword().equals(password)) {
			System.out.println("Password missmacth");
			throw new Exception("Password missmatch");
		}
		return usr;
	}

	// Update password of user
	public boolean changePassword(Password password) {
		User usr = userRepository.findByEmail(password.getEmail());
		if (usr.getPassword().equals(password.getCurPassword())) {
			usr.setPassword(password.getNewPassword());
			userRepository.save(usr);
			return true;
		}

		return false;
	}

	@Override
	public boolean forgotPassword(Password password) throws Exception {

		User usr = userRepository.findByEmail(password.getEmail());
		if (usr != null) 
		{
			boolean c1 = usr.getMobileNumber().equals(password.getMobileNumber());
			boolean c2 = usr.getSecurityQuestion().equals(password.getSecurityQuestion());
			boolean c3 = usr.getAnswer().equals(password.getAnswer());
			if (c1 && c2 && c3) 
			{
				usr.setPassword(password.getNewPassword());
				userRepository.save(usr);
				return true;
			}
		}

		return false;
	}

}