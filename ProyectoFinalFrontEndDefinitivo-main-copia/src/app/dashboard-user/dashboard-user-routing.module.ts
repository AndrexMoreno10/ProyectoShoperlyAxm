import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';

const routes: Routes = [

  {path: '', component: MainComponent,
  
children: [

  {
    path: 'products', loadChildren: () => import('../product/product.module').then(m=>m.ProductModule)
  },
  
]},
{path:'ShoppingCart', component:ShoppingCartComponent},
{
  path: 'search', loadChildren: () => import('../search/search.module').then(m => m.SearchModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule { }
