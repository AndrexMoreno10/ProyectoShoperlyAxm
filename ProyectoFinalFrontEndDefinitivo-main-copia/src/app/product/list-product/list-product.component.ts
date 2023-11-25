import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { Category } from 'src/app/category/category';
import { ActivatedRoute } from '@angular/router';
import { ShoppingCartService } from 'src/app/shopping-cart/shopping-cart.service';
import { SearchService } from 'src/app/search/search.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  filtproducts: Product[] = [];
  categoriesId: string = "";
  category: any
  idParam: any
  nameParam : any
  constructor(private productService: ProductServiceService,
    private route: ActivatedRoute, private cartService: ShoppingCartService,private searchService: SearchService) { }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {

    this.route.queryParams.subscribe(params => {
    this.nameParam = params['name'];
    
    if (this.nameParam !== undefined) {

      this.searchService.getSeachProduct(this.nameParam).subscribe(products => {
      this.products = products;
        })
        return
    }
    })

    this.route.params.subscribe(params => {
      this.idParam = params['id'];
      // Ahora, this.productId contiene el valor del parámetro de ruta 'id'
      console.log('Valor del parámetro id:', this.idParam);

      if (this.idParam !== undefined) {
        this.categoriesId = this.idParam;
        this.loadProduct();
        
      } else {
        this.productService.getAllProducts().subscribe(products => {
          this.products = products;
        })

      }
    });

  }


  searchByName(){
    
  }

  loadProduct() {
    this.productService.findByCategory(parseInt(this.categoriesId)).subscribe(
      (data) => {
        this.products = data;
        console.log("carga de productos")

      },
      (error) => {
        console.error('Error al cargar la category:', error);
      }
    );
  }

  buyProduct(productId: number | undefined): void {    
    this.productService.buyProduct(productId).subscribe(
      (response) => {
        console.log('Compra exitosa', response);
        // Puedes agregar lógica adicional aquí, como actualizar la UI.
      },
      // (error) => {
      //   console.error('Error al comprar', error);
      // }
    );
  }

}

