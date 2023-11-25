import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  crearEditar: boolean = false;
  idUserSelect?: number = undefined;
  nameUser: string = "";
  ageUser: number = 0;
  emailUser: string = "";
  phoneUser: string = "";
  addressUser: string = "";
  usernameUser: string = "";
  passwordUser: string = "";
  isAdminUser: boolean = false;
  users: User[] = [];
  

  constructor(private userService: UserService) { }

  ngOnInit(): void { 
    console.log("holiuser");
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.getAllUser().subscribe(data => {
      this.users = data;
    });
  }

  eliminar(id?: number) {
    if (id) {
      this.userService.deleteUser(id).subscribe(
        (data) => {
          SwalUtils.customMessageOk('Usuario eliminado satisfactoriamente',data);
          this.getAllUsers();
        },
        (error) => {
          SwalUtils.customMessageError('Error al eliminar el usuario',error);
        }
      );
    }
  }

  guardar() {
    const aux: User = {
      name: this.nameUser,
      age: this.ageUser,
      email: this.emailUser,
      phone: this.phoneUser,
      address: this.addressUser,
      username: this.usernameUser,
      password: this.passwordUser,
      isAdmin: this.isAdminUser,
      admin: this.isAdminUser
    };

    this.userService.createUser(aux).subscribe(
      (data) => {
        SwalUtils.customMessageOk('Usuario creado satisfactoriamente',"");
        this.getAllUsers();
        this.crearEditar = false;
        this.limpiarCampos();
      },
      (error) => {
        SwalUtils.customMessageError('Error al crear el usuario',error);
      }
    );
  }

  limpiarCampos() {
    this.nameUser = '';
    this.ageUser = 0;
    this.emailUser = '';
    this.phoneUser = '';
    this.addressUser = '';
    this.usernameUser = '';
    this.passwordUser = '';
    this.isAdminUser = false;
  }

  mostrarForm(idUserSelect?: number) {
    if (idUserSelect) {
      this.idUserSelect = idUserSelect;
      this.buscarPorArreglo();
    } else {
      this.idUserSelect = undefined;
    }
    this.crearEditar = true;
  }

  editar(id: number) {
    const auxEditar: User = {
      name: this.nameUser,
      age: this.ageUser,
      email: this.emailUser,
      phone: this.phoneUser,
      address: this.addressUser,
      username: this.usernameUser,
      password: this.passwordUser,
      isAdmin: this.isAdminUser,
      admin: this.isAdminUser
    };

    this.userService.putUser(id, auxEditar).subscribe(
      (data) => {
        SwalUtils.customMessageOk('Usuario editado satisfactoriamente',"");
        this.getAllUsers();
        this.crearEditar = false;
        this.idUserSelect = undefined;
      },
      (error) => {
        SwalUtils.customMessageError('Error al editar el usuario',error);
      }
    );
  }

  buscarPorArreglo() {
    const objetoFiltrado = this.users.find(user => user.id === this.idUserSelect);
    if (objetoFiltrado) {
      this.nameUser = objetoFiltrado.name || '';
      this.ageUser = objetoFiltrado.age || 0;
      this.emailUser = objetoFiltrado.email || '';
      this.phoneUser = objetoFiltrado.phone || '';
      this.addressUser = objetoFiltrado.address || '';
      this.usernameUser = objetoFiltrado.username || '';
      this.passwordUser = objetoFiltrado.password || '';
      this.isAdminUser = objetoFiltrado.isAdmin || false;
    }
  }

  finalizar() {
    if (this.idUserSelect) {
      this.editar(this.idUserSelect);
    } else {
      const aux: User = {
        name: this.nameUser,
        age: this.ageUser,
        email: this.emailUser,
        phone: this.phoneUser,
        address: this.addressUser,
        username: this.usernameUser,
        password: this.passwordUser,
        isAdmin: this.isAdminUser,
        admin: this.isAdminUser
      };

      this.userService.createUser(aux).subscribe(
        (data) => {
          SwalUtils.customMessageOk('Usuario creado satisfactoriamente',"");
          this.getAllUsers();
          this.crearEditar = false;
          this.limpiarCampos();
        },
        (error) => {
          SwalUtils.customMessageError('Error al crear el usuario',error);
        }
      );
    }
  }
}