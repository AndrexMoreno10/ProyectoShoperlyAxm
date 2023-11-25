import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchModule } from './search/search.module';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { DashboardUserModule } from './dashboard-user/dashboard-user.module';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { DashboardAdminModule } from './dashboard-admin/dashboard-admin.module';
import { authorizationGuard } from './auth/authorization.guard';
import { authorizationUserGuard } from './auth/authorization-user.guard';
import { authorizationAdminGuard } from './auth/authorization-admin.guard';
import { RegistrarUserComponent } from './user/registrar-user/registrar-user.component';
import { VentanaEmergenteComponent } from './ventana-emergente/ventana-emergente.component';



const routes: Routes = [

   {
    path:'',redirectTo:'/Login',pathMatch:'full'
   },

{path:'user', component: DashboardUserComponent

, loadChildren:()=>import("./dashboard-user/dashboard-user.module").then(x=>DashboardUserModule), canActivate:[authorizationGuard,authorizationUserGuard],

} ,
{path:'admin', component: DashboardAdminComponent, loadChildren:()=>import("./dashboard-admin/dashboard-admin.module").then(x=>DashboardAdminModule), canActivate:[authorizationGuard,authorizationAdminGuard],

},

{path:'Login',  component:LoginComponent},
{path: 'register', component: RegistrarUserComponent},
{path: 'ventanaEmergente', component: VentanaEmergenteComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
