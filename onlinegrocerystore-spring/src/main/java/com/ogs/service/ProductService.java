package com.ogs.service;

import java.util.List;

import com.ogs.model.Product;

public interface ProductService {
	//Get all products For both admin and user
	public List<Product> getProducts();
	

	//Add Product(ADMIN)
	public Product addProduct(Product product);
	public Product editProduct(Product product,Long id);
	public void deleteProduct(Long id);
	public Product getProductById(Long id);

}

