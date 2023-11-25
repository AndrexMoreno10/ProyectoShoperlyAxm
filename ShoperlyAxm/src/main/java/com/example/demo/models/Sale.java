package com.example.demo.models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Transient;

@Entity
public class Sale {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@ManyToOne
	@JoinColumn(name = "id_sale_user")
    private User user;
    
    
    private Date date_sale;
    private double total_value;
    


	public Sale() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getDate_sale() {
		return date_sale;
	}

	public void setDate_sale(Date date_sale) {
		this.date_sale = date_sale;
	}

	public double getTotal_value() {
		return total_value;
	}

	public void setTotal_value(double total_value) {
		this.total_value = total_value;
	}
	

}
