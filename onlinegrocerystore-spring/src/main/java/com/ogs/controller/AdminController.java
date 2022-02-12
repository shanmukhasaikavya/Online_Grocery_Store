package com.ogs.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ogs.model.Message;
import com.ogs.model.Orders;
import com.ogs.model.Product;
import com.ogs.service.MessageService;
import com.ogs.service.OrderService;
import com.ogs.service.ProductService;

import ch.qos.logback.core.pattern.util.RegularEscapeUtil;
@CrossOrigin
@RequestMapping(value="/admin")
@RestController
public class AdminController {
	@Autowired
	ProductService productService;
	@Autowired
	MessageService messageService;
	@Autowired
	OrderService orderService;
	//get All products
	@GetMapping("/products")
	public ResponseEntity<List<Product>> getProducts()
	{
		return new ResponseEntity<List<Product>>(productService.getProducts(),HttpStatus.OK);
	}
	//get product by id
	@GetMapping("/products/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable Long id)
	{
		return new ResponseEntity<Product>(productService.getProductById(id),HttpStatus.OK);
	}
	
	
	//Add product
	@PostMapping("/products")
	public ResponseEntity<Product> addProduct(@RequestBody Product product)
	{
		return new ResponseEntity<Product>(productService.addProduct(product),HttpStatus.CREATED);
	}
	//edit product
	//http:localhost:8080/admin/product/5
	@PutMapping("/product/{id}")
	public ResponseEntity<Product> editProduct(@RequestBody Product product,@PathVariable Long id)
	{
		return new ResponseEntity<Product>(productService.editProduct(product, id),HttpStatus.OK);
	}
	@DeleteMapping("/product/{id}")
	public void deleteProduct(@PathVariable Long id)
	{
		productService.deleteProduct(id);
	}
	
	//Get message from user
	@GetMapping("/messages")
	public ResponseEntity<List<Message>> getAllMessage()
	{
		return new ResponseEntity<List<Message>>(messageService.getMessage(),HttpStatus.OK);
	}
	
	//Get all orders place by user
	@GetMapping("/orders")
	public ResponseEntity<List<Orders>> getAllOrders()
	{
		return new ResponseEntity<List<Orders>>(orderService.getAllOrders(),HttpStatus.OK);
	}
	
	//Get all canceled orders
	@GetMapping("/cancelled")
	public ResponseEntity<List<Orders>> getCancelOrders()
	{
		return new ResponseEntity<List<Orders>>(orderService.getAllCancelOrders(),HttpStatus.OK);
	}
	
	//Get all delived orders
	@GetMapping("/delivered")
	public ResponseEntity<List<Orders>> getDeliveredOrders()
	{
		return new ResponseEntity<List<Orders>>(orderService.getAllDeliverOrders(),HttpStatus.OK);
	}
	
	//change status to cancell order
	@PutMapping("order/cancel/{id}")
	public ResponseEntity<Orders> changeToCancel(@PathVariable Long id)
	{
		return new ResponseEntity<Orders>(orderService.changeToCancel(id),HttpStatus.OK);
	}
	
	//change status to deliver order
	@PutMapping("order/deliver/{id}")
	public ResponseEntity<Orders> changeToDeliver(@PathVariable Long id)
	{
		return new ResponseEntity<Orders>(orderService.changeToDelivered(id),HttpStatus.OK);
	}
	
}
