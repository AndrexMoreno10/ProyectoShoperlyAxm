package com.example.demo.models;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Buys {
	
	
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String description;
	private double total_buy;
	private Date date;
	
	
	
	public Buys(Long id, String description, double total_buy, Date date) {
		super();
		this.id = id;
		this.description = description;
		this.total_buy = total_buy;
		this.date = date;
	}


	public Buys() {
		super();
	}

	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public double getTotal_buy() {
		return total_buy;
	}



	public void setTotal_buy(double total_buy) {
		this.total_buy = total_buy;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}

}