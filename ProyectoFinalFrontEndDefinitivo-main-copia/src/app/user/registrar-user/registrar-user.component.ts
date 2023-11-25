import { Component } from '@angular/core';
import { UserService } from '../user.service';

import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent {

  user: User = {
    name: '',
    age: 0,
    email: '',
    phone: '',
    address: '',
    username: '',
    password: '',
    isAdmin: false,
    admin: false
  };
  
    constructor(private userService: UserService, private router : Router) {}
  
    onSubmit() {
      this.userService.createUser(this.user).subscribe(response => {
        console.log('User created successfully', response);
        this.router.navigate(["/Login"])
      });
    }
  }

