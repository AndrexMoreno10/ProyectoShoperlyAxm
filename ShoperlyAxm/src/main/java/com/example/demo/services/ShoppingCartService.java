package com.example.demo.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.models.CartItem;
import com.example.demo.models.Product;
import com.example.demo.models.Shopping_Cart;
import com.example.demo.repository.IProductRepository;


@Service
public class ShoppingCartService {


   @Autowired
   private IProductRepository productRepository;
  
   
   public void purchase(Shopping_Cart shoppingCart) {
       try {
           
           for (CartItem cartItem : shoppingCart.getCartItems()) {
                Product product = productRepository.getById(cartItem.getProductId());
               int quantityToPurchase = cartItem.getQuantity();

               // Verifica si hay suficientes existencias del producto
               if (product.getQuantity() >= quantityToPurchase) {
                   // Actualiza el stock del producto
                   product.setQuantity(product.getQuantity() - quantityToPurchase);   
                   productRepository.save(product);

                   // Aquí puedes agregar lógica adicional, como procesar el pago, generar una factura, etc.
               } else {
                   // Maneja el caso donde no hay suficientes existencias del producto
               	 System.out.println("Insufficient stock for product: " + product.getName());
               }
           }
       } catch (Exception e) {
           // Maneja cualquier excepción que pueda ocurrir durante la compra
       	System.err.println("Error during purchase process: " + e.getMessage());
       }
   }
	
}
