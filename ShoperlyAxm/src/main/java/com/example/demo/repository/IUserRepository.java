package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.models.Supplier;
import com.example.demo.models.User;

public interface IUserRepository extends JpaRepository<User, Long>{
  @Query(value = "select * from user where username = ?1 and password = ?2", nativeQuery = true)
  List<User> login(String username, String password);
}
