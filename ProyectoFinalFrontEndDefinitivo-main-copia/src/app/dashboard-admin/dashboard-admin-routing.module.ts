import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeAdminComponent } from '../welcome-admin/welcome-admin.component';


const routes: Routes = [
  {
    path: '',

    children: [


      { path: 'categoryAdmin', loadChildren: () => import('../category/category.module').then(m => m.CategoryModule) },
      { path: 'productAdmin', loadChildren: () => import('../product/product.module').then(m => m.ProductModule) },
      { path: 'supplierAdmin', loadChildren: () => import('../supplier/supplier.module').then(m => m.SupplierModule) },
      { path: 'userAdmin', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
      

    ]

  },

  {path: 'welcomeAdmin',component:WelcomeAdminComponent}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardAdminRoutingModule { }
