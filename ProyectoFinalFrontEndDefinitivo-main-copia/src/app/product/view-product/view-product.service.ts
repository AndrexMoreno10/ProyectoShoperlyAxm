import { Injectable } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ViewProductService {

  private cartItems: any[] = [];
  products: Product[] = [];

  constructor(private productService: ProductServiceService) { }

  addToCart(product: any) {
    this.cartItems.push(product);
  }

  buyProduct(productId: number | undefined): void {
    this.productService.buyProduct(productId).subscribe(
      (response) => {
        console.log('Compra exitosa');
        // Puedes agregar lógica adicional aquí, como actualizar la UI.
      },
      (error) => {
        console.error('Error al comprar', error.error);
      }
    );
  }


}