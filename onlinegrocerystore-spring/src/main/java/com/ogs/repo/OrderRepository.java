package com.ogs.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ogs.model.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long> {

	List<Orders> findByEmail(String email);

	List<Orders> findByStatus(String string);
	
	//Admin side-Changing status cancel
	
	
}
