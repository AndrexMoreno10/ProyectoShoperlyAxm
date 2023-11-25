import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventana-emergente',
  templateUrl: './ventana-emergente.component.html',
  styleUrls: ['./ventana-emergente.component.css']
})
export class VentanaEmergenteComponent {

  constructor(private router :Router){}

  public borrarLocal(){
      localStorage.removeItem("user");
      this.router.navigate(["Login"])
    }
}

