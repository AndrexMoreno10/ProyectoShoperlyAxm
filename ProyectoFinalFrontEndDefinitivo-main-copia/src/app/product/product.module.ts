import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ListProductComponent} from './list-product/list-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FormsModule } from '@angular/forms';
import { ProductServiceService } from './product-service.service';
import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    ProductComponent,
    ListProductComponent,
    ViewProductComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ],
  exports:[
    ProductComponent,
    ListProductComponent,
    ViewProductComponent,

  ], 
  providers:[
    ProductServiceService
  ]
})
export class ProductModule { }
