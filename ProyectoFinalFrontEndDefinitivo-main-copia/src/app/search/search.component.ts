import { Component } from '@angular/core';
import { Product } from '../product/product';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from './search.service';
import { ProductServiceService } from '../product/product-service.service';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {


  searchKeyword: string = "";
  products : Product[]=[];
  productosId: string = "";

  constructor(private activatedRoute :ActivatedRoute ,private productService: ProductServiceService,private searchService : SearchService) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.searchKeyword = params['keyword'];

      if (this.searchKeyword !== undefined) {
        this.productosId = this.searchKeyword;
        this.loadProduct();
        
      } else {
        this.productService.getAllProducts().subscribe(products => {
          this.products = products;
        })

      }
    });

  }

  loadProduct() {
    this.productService.searchProductsByName(this.productosId).subscribe(
      (data) => {
        this.products = data;
        console.log("carga de productos")

      },
      (error) => {
        console.error('Error al cargar los productos:', error);
      }
    );
  }



searchProduct() {
  this.searchService.getSeachProduct(this.searchKeyword).subscribe((res) => {
    this.products = res.results
        }, (error) => {
     SwalUtils.customMessageError('Error', "Error en la consulta")

  })
}

}

