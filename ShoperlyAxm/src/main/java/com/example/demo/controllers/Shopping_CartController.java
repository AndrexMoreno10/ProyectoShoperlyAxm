package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.example.demo.models.Product;
import com.example.demo.models.Shopping_Cart;
import com.example.demo.services.ShoppingCartService;
import org.springframework.http.HttpStatus;

@RestController
@RequestMapping("/api/shopping_Cart")
@CrossOrigin(origins = "http://localhost:4200")
public class Shopping_CartController {

	private List<Product> cart = new ArrayList<>();
	
	@Autowired
	private ShoppingCartService shoppingCartService;
	

    
    @PostMapping("/purchase")
    public ResponseEntity<Void> purchaseShoppingCart(@RequestBody Shopping_Cart shoppingCart) {
        try {
            shoppingCartService.purchase(shoppingCart);
             return ResponseEntity.status(HttpStatus.OK).build();
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
    

    
    @PostMapping("/add")
    public ResponseEntity<String> addToCart(@RequestBody Product product) {
        cart.add(product);
        return ResponseEntity.ok("Producto agregado al carrito");
    }

    @GetMapping("/items")
    public ResponseEntity<List<Product>> getCartItems() {
        return ResponseEntity.ok(cart);
    }
    
    public ResponseEntity<String> removeFromCart(Long productId) {
        Product productToRemove = null;
        
        for (Product product : cart) {
            if (product.getId().equals(productId)) {
                productToRemove = product;
                break; 
            }
        }

        if (productToRemove != null) {
            cart.remove(productToRemove);
            return ResponseEntity.ok("Producto eliminado del carrito");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    
    
	
}
