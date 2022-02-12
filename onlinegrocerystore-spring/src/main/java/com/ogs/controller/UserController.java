package com.ogs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ogs.model.Message;
import com.ogs.model.Orders;
import com.ogs.model.Password;
import com.ogs.model.Product;
import com.ogs.model.User;
import com.ogs.repo.MessageRepository;
import com.ogs.service.MessageService;
import com.ogs.service.OrderService;
import com.ogs.service.ProductService;
import com.ogs.service.UserService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private ProductService productService;
	@Autowired
	private OrderService orderService;
	
	@Autowired
	private MessageService messageService;
	//creating user(register user)
	@PostMapping("/register")
	public ResponseEntity<User> createUser(@RequestBody User user) throws Exception {
		return new ResponseEntity<User>(userService.createUser(user), HttpStatus.CREATED);
	}
	//login user
	@PostMapping("/login")
	public User checkUser(@RequestBody User user) throws Exception {
		return userService.checkUser(user.getEmail(), user.getPassword());
	}
	
	//Forgot password function for user
	@PutMapping("/forgotpassword")
	public boolean forgotPassword(@RequestBody Password password) throws Exception
	{
		return userService.forgotPassword(password);
	}
	
	//Get all products
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getProducts()
	{
		return new ResponseEntity<List<Product>>(productService.getProducts(), HttpStatus.OK) ;
	}
	@PutMapping("/changepassword")
	public boolean changePassword(@RequestBody Password password)
	{
		return userService.changePassword(password);
	}
	
	//Place a order
	@PostMapping("/placeorder")
	public ResponseEntity<Orders> placeOrder(@RequestBody Orders order)
	{
		return new ResponseEntity<Orders>(orderService.createOrder(order),HttpStatus.CREATED);
	}
	
	//Get all order of user
	@GetMapping("/myorders/{email}")
	public ResponseEntity<List<Orders>> getUserOrders(@PathVariable String email)
	{
		return new ResponseEntity<List<Orders>>(orderService.getUserOrders(email),HttpStatus.OK);
		
	}
	@PostMapping("/message")
	public ResponseEntity<Message> sendMessage(@RequestBody Message message)
	{
		return new ResponseEntity<Message>(messageService.sendMessage(message),HttpStatus.CREATED);
	}
	
}
