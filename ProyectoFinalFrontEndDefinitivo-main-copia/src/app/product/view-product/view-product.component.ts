import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { ProductServiceService } from '../product-service.service';




@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  productId: string = '';
  product: any; // Inicializa product como null
  


  constructor(
    private route: ActivatedRoute,
    private productService: ProductServiceService,
    private cartService: ShoppingCartService
   
  ) {
   
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  ngOnInit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam !== null) {
      this.productId = idParam;
      console.log(this.productId)

      // Carga la información del producto utilizando this.productId
      this.loadProduct();
    }
  }

  // Método para cargar la información del producto
  loadProduct() {
    this.productService.getProduct(parseInt(this.productId)).subscribe(
      (data) => {
        this.product = data; 
        console.log(data)// Asigna la información del producto
      },
      (error) => {
        console.error('Error al cargar el producto:', error);
      }
    );
  }


  buyProduct(productId: number | undefined): void {    
    this.productService.buyProduct(productId).subscribe(
      (response) => {
        console.log('Compra exitosa', response);
        // Puedes agregar lógica adicional aquí, como actualizar la UI.
      },
      (error) => {
        console.error('Error al comprar', error);
      }
    );
  }


  
}
