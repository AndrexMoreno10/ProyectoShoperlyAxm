import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';
import { FormsModule } from '@angular/forms';
import { SupplierService } from './supplier.service';


@NgModule({
  declarations: [
    SupplierComponent
  ],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule
  ],
  exports:[
    SupplierComponent
  ],
  providers:[
    SupplierService
  ]
})
export class SupplierModule { }
