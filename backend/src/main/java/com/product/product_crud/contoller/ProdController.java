package com.product.product_crud.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.product.product_crud.modal.Product;
import com.product.product_crud.service.ProdService;

@CrossOrigin
@RestController
public class ProdController {
	
	@Autowired
	private ProdService service;
	
	@GetMapping("/products")
	public List<Product> getProducts(){
		return service.getProducts();
	}
	
	@PostMapping("/products")
	public void addProduct(@RequestBody Product p) {
		service.addProduct(p);
	}
	
	@PutMapping("/products")
	public void updateProduct(@RequestBody Product p) {
		service.updateProduct(p);
	}
	
	@DeleteMapping("/products/{id}")
	public void deleteProduct(@PathVariable int id) {
		service.deleteProduct(id);
	}

}
