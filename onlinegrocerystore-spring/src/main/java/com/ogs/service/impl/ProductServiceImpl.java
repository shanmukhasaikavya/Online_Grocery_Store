package com.ogs.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ogs.model.Product;
import com.ogs.repo.ProductRepository;
import com.ogs.service.ProductService;
@Service
public class ProductServiceImpl implements ProductService{
	@Autowired
	ProductRepository productRepository;
	
	//Get products for User
	@Override
	public List<Product> getProducts() {
		return productRepository.findAll();
	}

	//Add product(ADMIN)
	@Override
	public Product addProduct(Product product) {
		return productRepository.save(product);
	}
	
	@Override
	public Product editProduct(Product product, Long id) {
		Product p = productRepository.findById(id).get();
		if(p!=null)
		{
			p.setName(product.getName());
			p.setPrice(product.getPrice());
			p.setImage(product.getImage());
			p.setCategory(product.getCategory());
			p.setActive(product.isActive());
			productRepository.save(p);
		}
		return p;
	}
	@Override
	public void deleteProduct(Long id) {
		productRepository.deleteById(id);
	}

	@Override
	public Product getProductById(Long id) {
		Product p = productRepository.findById(id).get();
		return p;
	}

}
