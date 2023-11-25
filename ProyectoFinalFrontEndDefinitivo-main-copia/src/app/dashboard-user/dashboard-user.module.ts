import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardUserRoutingModule } from './dashboard-user-routing.module';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainComponent } from '../main/main.component';
import { HeaderComponent } from '../header/header.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { UserComponent } from '../user/user.component';
import { DashboardUserComponent } from './dashboard-user.component';
import { FooterModule } from '../footer/footer.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchModule } from '../search/search.module';
import { ProductModule } from '../product/product.module';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [

    SideNavComponent,
    MainComponent,
    HeaderComponent,
    ShoppingCartComponent,
    DashboardUserComponent

   
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule,
    FooterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SearchModule,
    ProductModule,
    RouterModule
  ]
})
export class DashboardUserModule {

}