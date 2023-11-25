package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.models.Supplier;
import com.example.demo.repository.ISupplierRepository;

@Service
public class SupplierService {

	@Autowired
	private ISupplierRepository supplierRepository;
	
	public List<Supplier> getAll(){
		return supplierRepository.findAll();
	}
	
	public Supplier getId(Long id) {
		return supplierRepository.findById(id).orElse(null);
	}
	
   public Supplier save(Supplier supplier) {
	   return supplierRepository.save(supplier);   
   }
   
   public void delete(Long id) {
	   supplierRepository.deleteById(id);
  }
   
}
