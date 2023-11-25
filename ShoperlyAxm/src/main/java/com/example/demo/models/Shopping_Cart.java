package com.example.demo.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;



public class Shopping_Cart {

	private List<CartItem> cartItems = new ArrayList<>();
	

	public Shopping_Cart(List<CartItem> cartItems) {
		super();
		this.cartItems = cartItems;
	}
	
	public Shopping_Cart() {
		super();
	}

	public List<CartItem> getCartItems() {
		return cartItems;
	}

	public void setCartItems(List<CartItem> cartItems) {
		this.cartItems = cartItems;
	}
	
    
	
    

}
