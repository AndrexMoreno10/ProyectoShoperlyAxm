package com.example.demo.models;


public class CartItem {

    private Long productId;
	private int quantity;
	
	 
	
	public CartItem(Long productId, int quantity) {
		super();
		this.productId = productId;
		this.quantity = quantity;
	}
	
	public CartItem() {
		super();
	}
	
	
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	
   
	
	
	
}
