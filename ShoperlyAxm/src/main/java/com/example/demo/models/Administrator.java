package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Administrator {
	
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	private int age; 
	private String email;
	private String phone;
	private String address;
	private String password;
	private String username;
	private String role;
    private String specialization;
    private String studies;
    private String professional_card;
    
    public Administrator() {
		super();
	}





	public Long getId() {
		return id;
	}





	public String getName() {
		return name;
	}





	public void setName(String name) {
		this.name = name;
	}





	public int getAge() {
		return age;
	}





	public void setAge(int age) {
		this.age = age;
	}





	public String getEmail() {
		return email;
	}





	public void setEmail(String email) {
		this.email = email;
	}





	public String getPhone() {
		return phone;
	}





	public void setPhone(String phone) {
		this.phone = phone;
	}





	public String getAddress() {
		return address;
	}





	public void setAddress(String address) {
		this.address = address;
	}





	public String getPassword() {
		return password;
	}





	public void setPassword(String password) {
		this.password = password;
	}





	public String getUsername() {
		return username;
	}





	public void setUsername(String username) {
		this.username = username;
	}





	public String getRole() {
		return role;
	}





	public void setRole(String role) {
		this.role = role;
	}





	public String getSpecialization() {
		return specialization;
	}





	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}





	public String getStudies() {
		return studies;
	}





	public void setStudies(String studies) {
		this.studies = studies;
	}





	public String getProfessional_card() {
		return professional_card;
	}





	public void setProfessional_card(String professional_card) {
		this.professional_card = professional_card;
	}





	public void setId(Long id) {
		this.id = id;
	}
}