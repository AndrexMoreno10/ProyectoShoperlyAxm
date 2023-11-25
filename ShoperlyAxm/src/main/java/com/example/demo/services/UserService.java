package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.models.Category;
import com.example.demo.models.Login;
import com.example.demo.models.User;
import com.example.demo.repository.ICategoryRepository;
import com.example.demo.repository.IUserRepository;


@Service
public class UserService {
	
	@Autowired
	private IUserRepository userRepository;
	
	public List<User> getAll(){
		return userRepository.findAll();
	}
	
	public User getId(Long id) {
		return userRepository.findById(id).orElse(null);
	}
	
   public User save(User user) {
	   return userRepository.save(user);   
   }
   
   public void delete(Long id) {
	   userRepository.deleteById(id);
  }
   
   public User login (Login login) {
	   List<User> aux = userRepository.login(login.getUsername(), login.getPassword());
	   return !aux.isEmpty() ? aux.get(0) : null;
   }
   
}
