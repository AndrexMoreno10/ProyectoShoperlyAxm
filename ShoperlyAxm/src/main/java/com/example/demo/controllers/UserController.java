package com.example.demo.controllers;

import java.util.List;

import javax.management.RuntimeErrorException;

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

import com.example.demo.models.Login;
import com.example.demo.models.User;
import com.example.demo.services.UserService;



@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping
	public ResponseEntity<List<User>> getAll() {
        return ResponseEntity.ok(userService.getAll());
    }
	
    @GetMapping("/{id}")
    public ResponseEntity<User> getId(@PathVariable Long id) {
    	User user = userService.getId(id);
        
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<User> putUser(@PathVariable Long id, @RequestBody User newUser) {
    	User aux = userService.getId(id);

        if (aux != null) {
        	aux.setName(newUser.getName());
        	aux.setAge(newUser.getAge());
        	aux.setEmail(newUser.getEmail());
        	aux.setPhone(newUser.getPhone());
            aux.setAddress(newUser.getAddress());
            aux.setUsername(newUser.getUsername());
            aux.setPassword(newUser.getPassword());
            return ResponseEntity.ok(userService.save(aux));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<User> create(@RequestBody User user) {
        return ResponseEntity.ok(userService.save(user));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {	
    	userService.delete(id);
        return ResponseEntity.noContent().build();
    }
    
    
    
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody Login login) {

    	User user = userService.login(login);
    	if(user == null) {
    		return ResponseEntity.notFound().build();
    	}else {
    		return ResponseEntity.ok(user);
    	}
    	
    }

	
}
