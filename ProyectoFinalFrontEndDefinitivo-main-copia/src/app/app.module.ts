import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductModule } from './product/product.module';
import { SupplierModule } from './supplier/supplier.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoryModule } from './category/category.module'; 
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { HeaderAdminModule } from './header-admin/header-admin.module';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
import { SearchModule } from './search/search.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardUserModule } from './dashboard-user/dashboard-user.module';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { VentanaEmergenteComponent } from './ventana-emergente/ventana-emergente.component';
import { RegistrarUserComponent } from './user/registrar-user/registrar-user.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentanaEmergenteComponent,
    RegistrarUserComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ProductModule,
    SupplierModule,
    CategoryModule,
    SupplierModule,
    HeaderAdminModule,
    DashboardAdminModule,
    DashboardUserModule

    

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
