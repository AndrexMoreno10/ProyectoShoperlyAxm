package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.example.demo.models.Category;
import com.example.demo.repository.ICategoryRepository;


@Service 
public class CategoryService {
	
	@Autowired
	private ICategoryRepository categoryRepo;
	
	public List<Category> getAll(){
		return categoryRepo.findAll();
	}
	
	public Category getId(Long id) {
		return categoryRepo.findById(id).orElse(null);
	}
	
   public Category save(Category category) {
	   return categoryRepo.save(category);   
   }
   
   public void delete(Long id) {
	   categoryRepo.deleteById(id);
  }
   
   public Category put(Long id , Category newCategory) {
	   Category aux = categoryRepo.findById(id).orElse(null);
       if (aux != null) {
       	aux.setName(newCategory.getName());
       	this.save(aux);
           return aux;
       } else {
           return null;
       }
   }
   
}
