package com.ogs.service.impl;


import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ogs.model.Orders;
import com.ogs.repo.OrderRepository;
import com.ogs.service.OrderService;
@Service
public class OrderServiceImpl implements OrderService {
	@Autowired
	OrderRepository orderRepository;
	
	@Override
	public Orders createOrder(Orders order) {
		
		order.setOrderDate(LocalDate.now());
		order.setExpectDate(LocalDate.now().plusDays(8));
		order.setStatus("processing");
		return orderRepository.save(order);
		
	}

	@Override
	public List<Orders> getUserOrders(String email) {
		return orderRepository.findByEmail(email);
	}

	//Admin
	//To get all order place by users which is processing
	@Override
	public List<Orders> getAllOrders() 
	{
		return orderRepository.findByStatus("processing");
	}
	
	//Admin -change status to canceled
	@Override
	public Orders changeToCancel(Long id) {
		Orders o = orderRepository.findById(id).get();
		o.setStatus("cancelled");
		return orderRepository.save(o);
	}
	//Admin -change status to delivered
	@Override
	public Orders changeToDelivered(Long id) {
		Orders o = orderRepository.findById(id).get();
		o.setStatus("delivered");
		return orderRepository.save(o);
	}
	
	//Admin -get All canceled orders
	@Override
	public List<Orders> getAllCancelOrders() {
		return orderRepository.findByStatus("cancelled");
	}
	//Admin -get All delivered orders
	@Override
	public List<Orders> getAllDeliverOrders() {
		return orderRepository.findByStatus("delivered");
	}
	
	
	
	

}
