package com.example.demo.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.models.Supplier;
import com.example.demo.services.SupplierService;

@RestController
@RequestMapping("/api/supplier")
@CrossOrigin(origins = "http://localhost:4200")
public class SupplierController {
	
	@Autowired
	private SupplierService supplierService;
	
	@GetMapping
	public ResponseEntity<List<Supplier>> getAll() {
        return ResponseEntity.ok(supplierService.getAll());
    }
	
    @GetMapping("/{id}")
    public ResponseEntity<Supplier> getId(@PathVariable Long id) {
    	Supplier supplier = supplierService.getId(id);
        
        if (supplier != null) {
            return ResponseEntity.ok(supplier);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Supplier> putSupplier(@PathVariable Long id, @RequestBody Supplier newSupplier) {
    	Supplier aux = supplierService.getId(id);

        if (aux != null) {
        	aux.setName(newSupplier.getName());
        	aux.setPhone(newSupplier.getPhone());
            aux.setAddress(newSupplier.getAddress());
            return ResponseEntity.ok(supplierService.save(aux));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<Supplier> create(@RequestBody Supplier supplier) {
        return ResponseEntity.ok(supplierService.save(supplier));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {	
    	supplierService.delete(id);
        return ResponseEntity.noContent().build();
    }
    


}
