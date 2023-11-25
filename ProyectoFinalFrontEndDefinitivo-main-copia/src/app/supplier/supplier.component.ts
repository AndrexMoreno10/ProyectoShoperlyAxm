import { Component, OnInit } from '@angular/core';
import { Supplier } from './supplier';
import { SupplierService } from './supplier.service';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit{

  idSupplierSelect?: number = undefined;
  crearEditar: boolean = false;
  nameSupplier: string = "";
  phoneSupplier: string = "";
  addressSupplier: string = "";
  suppliers: Supplier[] = []

  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.getAllSuppliers();
  }

  getAllSuppliers() {
    this.supplierService.getAllSupplier().subscribe(data => {
      this.suppliers = data;
    })
  }

  eliminar(id?: number) {
    if (id) {
      this.supplierService.deleteSupplier(id).subscribe(
        (data) => {
          SwalUtils.customMessageOk('Se elimino de manera satisfactoria',data);
          this.getAllSuppliers();
        },
        (error) => {
          SwalUtils.customMessageError('el provedor contiene un producto y no se puede eliminar ',error);
        }
      )
    }

  }

  guardar() {
    const aux: Supplier = {
      name: this.nameSupplier,
      phone: this.phoneSupplier,
      address: this.addressSupplier
    }
    this.supplierService.createSupplier(aux).subscribe(
      (data) => {
        SwalUtils.customMessageOk('Se agregó de manera satisfactoria',"");
        this.getAllSuppliers();
        this.crearEditar = false;
        this.limpiarCampos();
      },
      (error) => {
        SwalUtils.customMessageError('No se pudo agregar la categoria',error);
      }
    )

  }

  limpiarCampos(){
    this.nameSupplier = "";
    this.phoneSupplier = "";
    this.addressSupplier= "";
  }

  mostrarForm(idSupplierSelect?: number) {
    if (idSupplierSelect) {
      this.idSupplierSelect = idSupplierSelect
      this.buscarPorArreglo();
    }else{
      this.idSupplierSelect = undefined
    }
    this.crearEditar = true;
  }

  editar(id: number) {
    const auxEditar: Supplier = {
      name: this.nameSupplier,
      phone: this.phoneSupplier,
      address: this.addressSupplier
    }
    this.supplierService.putSupplier(id, auxEditar).subscribe(
      (data) => {
        SwalUtils.customMessageOk('Se editó de manera satisfactoria',"");
        this.getAllSuppliers();
        this.crearEditar = false;
        this.idSupplierSelect = undefined;
      },
      (error) => {
        SwalUtils.customMessageError('No se pudo editar el supplier',error);
      }
    )

  }

  buscarPorArreglo() {
    const objetoFiltrado = this.suppliers.filter(supplier => supplier.id === this.idSupplierSelect)[0];
    this.nameSupplier = objetoFiltrado.name;
    this.addressSupplier = objetoFiltrado.address;
    this.phoneSupplier = objetoFiltrado.phone;
  }

  finalizar() {
    if (this.idSupplierSelect) {
      this.editar(this.idSupplierSelect);
    } else {
      this.guardar();
    }

  }


}
