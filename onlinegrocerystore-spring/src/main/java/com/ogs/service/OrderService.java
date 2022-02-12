package com.ogs.service;

import java.util.List;

import com.ogs.model.Orders;

public interface OrderService {
	//to create order
	public Orders createOrder(Orders order);
	
	//get all order by the user
	public List<Orders> getUserOrders(String email);
	
	//admin to get all orders which are processing
	public List<Orders> getAllOrders();
	
	//change status to canceled -get for admin
	public Orders changeToCancel(Long id);
	
	//change status to delivered -get for admin
	public Orders changeToDelivered(Long id);
	
	//Admin - to get all orders status is canceled
	public List<Orders> getAllCancelOrders();
	
	//Admin - to get all orders status is canceled
	public List<Orders> getAllDeliverOrders();
	
}
