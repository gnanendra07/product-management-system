package com.product.product_crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.product.product_crud.modal.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer>{

}
