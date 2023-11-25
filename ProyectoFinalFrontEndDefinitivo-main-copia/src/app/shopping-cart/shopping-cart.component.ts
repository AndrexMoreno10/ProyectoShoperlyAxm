import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import Swal from 'sweetalert2';
import { CartItems } from './CartItems';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  cartItems: any[];

  constructor(private cartService: ShoppingCartService) {
    this.cartItems = this.cartService.getCartItems();
    

  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  buyCart() {
    const formato = this.cartItems.map((elemento) => {
      return {
        "productId" : elemento.id,
        "quantity" : elemento.quantityclient
      }
    })
    const shoppingCart = {
      "cartItems" : formato
    };   
    this.cartService.buyCart(shoppingCart).subscribe(
        response => {

          SwalUtils.customMessageOk('Compra realizada con éxito', response)
          this.clearCart();

        },
        error => {
          SwalUtils.customMessageError('Error al realizar la compra', error);
          console.log(error);
          
          // console.error('Error al realizar la compra', error);
          // Maneja errores y realiza acciones adicionales
        }
      )
  }

  removeFromCart(itemId: number) {

    Swal.fire({
      title: '¿Desea eliminar el producto del carrito?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Producto eliminado', '', 'success');
        this.cartService.removeFromCart(itemId);
        this.cartItems = this.cartService.getCartItems();
      } else {
        Swal.fire('Operación cancelada', '', 'info');
        return ;
      }
    }); 
    

  }

  incrementQuantity(item: any): any {
    const stockQuantity = item.quantity; // Supongamos que el producto tiene un atributo 'stockQuantity' que representa la cantidad en stock.
  
    if (item.quantityclient < stockQuantity) {
      item.quantityclient++; // Incrementa la cantidad en el carrito.
      return item.quantityclient;
    } else {
      // Muestra un mensaje de error al usuario si no hay suficiente stock.
      alert('No hay suficiente stock disponible para este producto.');
    }
  }
  
  decrementQuantity(item: any): any {
    if (item.quantityclient > 1) {
      item.quantityclient--; // Decrementa la cantidad en el carrito.
      return item.quantityclient;
    } else {
      
      Swal.fire({
        title: '¿Desea eliminar el producto del carrito?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Producto eliminado', '', 'success');
          this.removeFromCart(item.id);
        } else {
          Swal.fire('Operación cancelada', '', 'info');
          return item.quantityclient;
        }
      }); 
}
  }
}
