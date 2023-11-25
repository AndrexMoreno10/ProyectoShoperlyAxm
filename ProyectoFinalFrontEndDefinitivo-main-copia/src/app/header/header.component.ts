import { Component,Input, Output ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  @Input() resultStatus: boolean = true;
  @Output() resultStatusChange = new EventEmitter<boolean>();

  constructor(private router:Router) {

  }

  showLoginApareces(){
    this.resultStatus = true;
    this.resultStatusChange.emit(this.resultStatus)
  }

  showLoginDesaper(){
      this.resultStatus = false;
      this.resultStatusChange.emit(this.resultStatus)
    }

    
  searchAction(searchText:any) {
  console.log(searchText);
  this.router.navigate(["/user/products"], {queryParams:{name:searchText}});
  }

  cerrarSesion(){
  localStorage.removeItem("user");
  this.router.navigate(["Login"])
}
  

}
