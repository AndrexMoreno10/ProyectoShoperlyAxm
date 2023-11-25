import { Component } from '@angular/core';
import { UserService } from '../user/user.service';
import { Router } from '@angular/router';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userName : string = ""
  password : string = ""

  constructor(private userService : UserService,private router :Router){

  }

 iniciarSesion(username: string, password: string){

  this.userService.loginUser(username,password).subscribe(
    (data) => {

      console.log(data)
              localStorage.setItem("user",JSON.stringify(data))
              if(data.admin){

                this.router.navigate(["admin/welcomeAdmin"])
                
                
              }else{
                this.router.navigate(["/user"])
              }
              SwalUtils.customMessageOk('Bienvenido','login Correcto')
              
            },
            (error) => {
              SwalUtils.customMessageError('Ops! Hubo un error', 'login Incorrecto')
            }

  )
 }


 

}
