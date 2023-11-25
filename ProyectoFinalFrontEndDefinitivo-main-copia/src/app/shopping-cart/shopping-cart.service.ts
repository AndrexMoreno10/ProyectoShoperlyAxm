import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems: any[] = [];
  urlApi = environment.API_URL_SHOPPINGCART

  constructor(private http: HttpClient) { }


  // buyCart(ShoppingCart: any): Observable<any> {
  //   console.log(ShoppingCart);
  //   return this.http.post<any>(`${this.urlApi}/purchase`, ShoppingCart);
  // }

  buyCart(ShoppingCart: any): Observable<any> {
    console.log(ShoppingCart);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.urlApi}/purchase`, ShoppingCart, { headers });
  }

  addToCart(product: any) {

    var indiceObjetoAModificar = -1;
    const stockQuantity = product.quantity;
// Buscar el índice del objeto en la lista por su ID
    indiceObjetoAModificar = this.cartItems.findIndex(function(productoEncontrado) {
      return product.id === productoEncontrado.id;
    });
    if(indiceObjetoAModificar !== -1){
      console.log(product);
      console.log(this.cartItems[indiceObjetoAModificar]);
        
        // Modificar la propiedad del objeto directamente
      this.cartItems[indiceObjetoAModificar].quantityclient += (product.quantityclient ? product.quantityclient : 1);


    }else{

      if (stockQuantity >= 1) { // Verifica si la cantidad es válida (mayor o igual a 1).
      
        const newProduct = {
          ...product,
          quantityclient: 1
        };
        this.cartItems.push(newProduct);
      } else {
        // Muestra un mensaje de error al usuario si no hay suficiente stock.
        alert('No hay suficiente stock disponible para este producto.');
      }

    }

  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

   removeFromCart(productId: number) {
    const index = this.cartItems.findIndex(item => item.id === productId);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  



}
