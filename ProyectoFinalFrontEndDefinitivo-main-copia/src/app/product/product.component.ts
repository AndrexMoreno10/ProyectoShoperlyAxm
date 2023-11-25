import { Component } from '@angular/core';
import { Product } from './product';
import { Supplier } from '../supplier/supplier';
import { Category } from '../category/category';
import { ProductServiceService } from './product-service.service';
import { SupplierService } from '../supplier/supplier.service';
import { CategoryService } from '../category/category.service';
import { SwalUtils } from '../utils/swal-utils';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  selectedImage: string = ""; // Para mostrar la imagen seleccionada
  selectedFile: File | null = null; // Para mantener referencia al archivo seleccionado
  idProductSelect?: number = undefined;
  crearEditar: boolean = false;
  nameProduct?: string = "";
  descriptionProduct?: string = "";
  priceProduct?: number = 0;
  supplierProduct?: Supplier | undefined;
  categoryProduct?: Category | undefined;
  stateProduct?: string = "";
  urlProduct?: string = "";
  quantityProduct?: number = 0;
  products: Product[] = []
  categories: Category[] = [];
  suppliers: Supplier[] = [];
  product: Product = {};

  constructor(private productService: ProductServiceService, private supplierService: SupplierService,
    private categoryService: CategoryService) {

  }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllSuppliers();
  }


  subirImagen() {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
  
      this.productService.subirImagen(formData).subscribe(
        (data) => {
  
          localStorage.setItem('imagenSubida', data.url);
          console.log('URL de la imagen subida:', data.url);
        },
        (error) => {
          // Manejar errores si la subida de la imagen falla
          console.error('Error al subir la imagen:', error);
        }
      );
    }
  }


  onFileSelected(event: any): void {
    if (event.target && event.target.files && event.target.files.length > 0) {
        const file: File | undefined = event.target.files[0];

        if (file) {
            const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
            const fileExtension = file.name.split('.').pop()?.toLowerCase();
            console.log(fileExtension ) // Obtén la extensión del archivo

            if (fileExtension && allowedExtensions.includes(fileExtension)) {
                // El archivo tiene una extensión permitida, puedes proceder a mostrarlo y almacenarlo.
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target) { // Comprueba que e.target no sea nulo
                        this.selectedImage = e.target.result as string;
                    }
                };
                reader.readAsDataURL(file);

                // Guarda la referencia del archivo para subirlo después
                this.selectedFile = file;
            } else {
                // El archivo tiene una extensión no permitida, muestra un mensaje de error o toma la acción adecuada.
                console.error('El archivo seleccionado no es una imagen válida.');
            }
        }
    }
}


uploadImage(): void {
  if (this.selectedFile) {
    this.productService.uploadImage(this.selectedFile).subscribe(
      (imageUrl) => {
        SwalUtils.customMessageOk('Imagen subida con éxito. URL de la imagen:', imageUrl);
        this.urlProduct = imageUrl; // Actualiza la URL del producto con la URL de la imagen cargada
      },
      (error) => {
        SwalUtils.customMessageError('Error al cargar la imagen:', error);
      }
    );
  } else {
    SwalUtils.customMessageError('No se ha seleccionado ningún archivo para subir.',"");
  }
}






  getAllProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }

  getAllCategories() {
    this.categoryService.getAllCategory().subscribe(data => {
      this.categories = data;
    })
  }

  getAllSuppliers() {
    this.supplierService.getAllSupplier().subscribe(data => {
      this.suppliers = data;
    })
  }

  eliminar(id?: number) {
    if (id) {
      this.productService.deleteProduct(id).subscribe(
        (data) => {
          SwalUtils.customMessageOk('Se elimino de manera satisfactoria',data);
          this.getAllProducts();
        },
        (error) => {
          SwalUtils.customMessageError('el provedor contiene un producto y no se puede eliminar ',error);
        }
      )
    }

  }

  guardar() {
    const aux: Product = {
      name: this.nameProduct,
      description: this.descriptionProduct,
      price: this.priceProduct,
      supplier: this.supplierProduct,
      category: this.categoryProduct,
      state: this.stateProduct,
      url: this.urlProduct,
      quantity: this.quantityProduct,
      quantityclient: 0
    }
    this.productService.createProduct(aux,this.selectedFile).subscribe(
      (data) => {
        SwalUtils.customMessageOk('Se agregó de manera satisfactoria',"");
        this.getAllProducts();
        this.crearEditar = false;
        this.limpiarCampos();
      },
      (error) => {
        SwalUtils.customMessageError('No se pudo agregar el producto',error);
      }
    )

  }

  limpiarCampos() {
    this.nameProduct = '';
    this.descriptionProduct = '';
    this.priceProduct = 0;
    this.supplierProduct = undefined;
    this.categoryProduct = undefined;
    this.stateProduct = '';
    this.urlProduct = '';
    this.quantityProduct = 0;
    this.selectedFile = null; //limpiar la imagen seleccionada
    this.selectedImage = ''; // Limpiar la vista previa de la imagen
  }

  mostrarForm(idProductSelect?: number) {
    if (idProductSelect) {
      this.idProductSelect = idProductSelect
      this.buscarPorArreglo();
    } else {
      this.idProductSelect = undefined
    }
    this.crearEditar = true;
  }

  editar(id: number) {
    const auxEditar: Product = {
      name: this.nameProduct,
      description: this.descriptionProduct,
      price: this.priceProduct,
      supplier: this.supplierProduct,
      category: this.categoryProduct,
      state: this.stateProduct,
      url: this.urlProduct,
      quantity: this.quantityProduct
      
    }
    this.productService.putProduct(id, auxEditar).subscribe(
      (data) => {
        SwalUtils.customMessageOk('Se editó de manera satisfactoria',"");
        this.getAllProducts();
        this.limpiarCampos();
        this.crearEditar = false;
        this.idProductSelect = undefined;
      },
      (error) => {
        SwalUtils.customMessageError('No se pudo editar el supplier',error);
      }
    )

  }

  buscarPorArreglo() {
    const objetoFiltrado = this.products.filter(product => product.id === this.idProductSelect)[0];
    this.nameProduct = objetoFiltrado.name;
    this.descriptionProduct = objetoFiltrado.description;
    this.priceProduct = objetoFiltrado.price;
    this.supplierProduct = objetoFiltrado.supplier;
    this.categoryProduct = objetoFiltrado.category;
    this.stateProduct = objetoFiltrado.state;
    this.urlProduct = objetoFiltrado.url;
    this.quantityProduct = objetoFiltrado.quantity
  
  }



  finalizar() {
    if (this.idProductSelect) {
      this.editar(this.idProductSelect);
    } else {
      
      const imagenSubida: string = localStorage.getItem('imagenSubida') || '';// Recuperar la URL de la imagen del localStorage
      const aux: Product = {
        name: this.nameProduct,
        description: this.descriptionProduct,
        price: this.priceProduct,
        supplier: this.supplierProduct,
        category: this.categoryProduct,
        state: this.stateProduct,
        url: imagenSubida!, // Asignar la URL recuperada
        quantity: this.quantityProduct
      };
  
      this.productService.createProduct(aux,this.selectedFile).subscribe(
        (data) => {
          SwalUtils.customMessageOk('Se agregó de manera satisfactoria',"");
          this.getAllProducts();
          this.crearEditar = false;
          this.limpiarCampos();
          localStorage.removeItem('imagenSubida'); // Limpiar campos y eliminar la URL del localStorage
        },
        (error) => {
          SwalUtils.customMessageError('No se pudo agregar el producto',error);
        }
      );
    }
  }

  


}
