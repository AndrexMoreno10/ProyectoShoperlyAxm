import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { FormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { UserService } from './user.service';


@NgModule({
  declarations: [
  UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports:[
    UserComponent
  ],
  providers:[
    UserService
  ]
})
export class UserModule { }
