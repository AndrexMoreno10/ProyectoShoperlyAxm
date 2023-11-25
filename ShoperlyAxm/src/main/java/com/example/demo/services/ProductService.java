package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Category;
import com.example.demo.models.Product;
import com.example.demo.models.Shopping_Cart;
import com.example.demo.repository.IProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private IProductRepository productRepo;
	
	public List<Product> getAll(){
		return productRepo.findAll();
	}
	
	public Product getId(Long id) {
		return productRepo.findById(id).orElse(null);
	}
	
   public Product save(Product product) {
	   return productRepo.save(product);   
   }
   
   public void delete(Long id) {
	   productRepo.deleteById(id);
  }
   
   public List<Product> findByCategory(Long id) {
	   Category category = new Category();
	   category.setId(id);
	   return productRepo.findByCategory(category);
		
	}
   
   public List<Product> searchProductsByName(String name) {
       return productRepo.findByNameContaining(name);
   }


}
