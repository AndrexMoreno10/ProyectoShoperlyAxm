import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category/category';
import { CategoryService } from '../category/category.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  categories  : Category[] = []
  category: any
  categoryId: string = '';



  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService){
    }


  ngOnInit() {
    this.loadCategories();

  }

  // Método para cargar la información del producto
  loadCategories() {
    this.categoryService.getAllCategory().subscribe(
      (data) => {
        this.categories = data; 
        console.log(data)
      },
      (error) => {
        console.error('Error al cargar la categoria:', error);
      }
    );
  }
}
