package com.product.product_crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.product.product_crud.modal.Product;
import com.product.product_crud.repository.ProductRepo;

@Service
public class ProdService {
	
	@Autowired
	private ProductRepo repo;

	public List<Product> getProducts() {
		return repo.findAll(Sort.by(Sort.Direction.ASC,"id"));
	}

	public void addProduct(Product p) {
		repo.save(p);
	}

	public void updateProduct(Product p) {
		repo.save(p);
	}

	public void deleteProduct(int id) {
		repo.deleteById(id);
	}

	
}
