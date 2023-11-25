import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderAdminRoutingModule } from './header-admin-routing.module';
import { HeaderAdminComponent } from './header-admin.component';


@NgModule({
  declarations: [HeaderAdminComponent],
  imports: [
    CommonModule,
    HeaderAdminRoutingModule
  ],
  exports:[HeaderAdminComponent]
})
export class HeaderAdminModule { }
