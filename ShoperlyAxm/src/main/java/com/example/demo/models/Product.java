package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Transient;

@Entity(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
	private String name;
	private String description;
	private double price;
	
	
	@ManyToOne
	@JoinColumn(name = "id_supplier_product")
	private Supplier supplier;
	
	@ManyToOne
	@JoinColumn(name = "id_category_product")
	private Category category;
	
	private String state;
	private String url;
	private int quantity;
	
	@Transient
	private int quantityclient;
	


	public Product() {
	    super();
	}


	
	public Product(Long id, String name, String description, double price, Supplier supplier, Category category,
			String state, String url, int quantity, int quantityclient) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.price = price;
		this.supplier = supplier;
		this.category = category;
		this.state = state;
		this.url = url;
		this.quantity = quantity;
		this.quantityclient = quantityclient;
	}



	public Product(Long id) {
		super();
		this.id = id;
	}





	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public Supplier getSupplier() {
		return supplier;
	}


	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}
	
	


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}

	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	

	


}	