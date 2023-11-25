import { Component, OnInit } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from './category';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  resultStatus = true;
  idCategorySelect?: number = undefined;
  crearEditar: boolean = false;
  nameCategory: string = "";
  categories: Category[] = []

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    console.log("holi");
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    })
  }

  eliminar(id?: number) {
    if (id) {
      this.categoryService.deleteCategory(id).subscribe(
        (data) => {
          SwalUtils.customMessageOk('Se elimino de manera satisfactoria',data);
          this.getAllCategories();
        },
        (error) => {
          SwalUtils.customMessageError('la categoria contiene un producto y no se puede eliminar ',error);
        }
      )
    }


  }

  guardar() {
    const aux: Category = {
      name: this.nameCategory
    }
    this.categoryService.createCategory(aux).subscribe(
      (data) => {
        SwalUtils.customMessageOk('Se agregó de manera satisfactoria',"");
        this.getAllCategories();
        this.crearEditar = false;
        this.nameCategory = "";
      },
      (error) => {
        SwalUtils.customMessageError('No se pudo agregar la categoria',error);
      }
    )

  }

  mostrarForm(idCategory?: number) {
    if (idCategory) {
      this.idCategorySelect = idCategory
      this.buscarPorArreglo();
    }else{
      this.idCategorySelect = undefined
    }
    this.crearEditar = true;
  }

  editar(id: number) {
    const auxEditar: Category = {
      name: this.nameCategory
    }
    this.categoryService.putCategory(id, auxEditar).subscribe(
      (data) => {
        SwalUtils.customMessageOk('Se editó de manera satisfactoria',"");
        this.getAllCategories();
        this.crearEditar = false;
        this.idCategorySelect = undefined;
      },
      (error) => {
        SwalUtils.customMessageError('No se pudo editar la categoria',error);
      }
    )

  }

  buscarPorArreglo() {
    const objetoFiltrado = this.categories.filter(category => category.id === this.idCategorySelect)[0];
    this.nameCategory = objetoFiltrado.name;
  }

  finalizar() {
    if (this.idCategorySelect) {
      this.editar(this.idCategorySelect);
    } else {
      this.guardar();
    }

  }
}








