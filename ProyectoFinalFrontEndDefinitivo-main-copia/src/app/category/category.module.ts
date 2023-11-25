import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryService } from './category.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    FormsModule
  ],
  exports:[
    CategoryComponent
  ],
  providers:[
    CategoryService
  ]

})
export class CategoryModule { }
