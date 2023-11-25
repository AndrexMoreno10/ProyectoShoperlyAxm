import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product, UrlResponse } from './product';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {


  urlApi = environment.API_URL_PRODUCTS
  urlApiCategory = environment.API_URL_CATEGORY
  urlApiSearch = environment.API_URL_SEARCH
  urlApiAdmin = environment.API_URL_ADMIN

  constructor(private http: HttpClient) {

  }

  buyProduct(productId: number | undefined): Observable<any> {
    console.log(productId)
    return this.http.post<any>(`${this.urlApi}/buy/${productId}`,{});
  }


  product(product: Product) {
    let json = JSON.stringify(product)
    return this.http.post<Product>(this.urlApi, json)
  }

  getProduct(productId: number): Observable<Product> {
    return this.http.get<Product>(`${this.urlApi}/${productId}`);
  }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlApi)
  }


  findByCategory(categoryId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.urlApi}/category/${categoryId}`);
  }

  searchProductsByName(name: string): Observable<any> {
    return this.http.get(`${this.urlApiSearch}${name}`);
  }



  createProduct(product: Product, file: File | null): Observable<Product> {
    console.log(file);
    if (file != null) {
      const formData = new FormData();
      formData.append('file', file);
      this.http.post(this.urlApi + "/test", {url:"test"})
      this.http.post<UrlResponse>(this.urlApi + "/image-rest", formData).subscribe(res => product.url = res.url);
      console.log(product)
      return this.http.post<Product>(this.urlApi, product);

    } else {

      return this.http.post<Product>(this.urlApi, product);

    }

  }

  subirImagen(formData: FormData) {
    return this.http.post<any>(`${this.urlApi}/image-rest`, formData);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<Product>(`${this.urlApi}/${id}`);
  }

  putProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.urlApi}/${id}`, product);
  }



  uploadImage(file: File): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(`${this.urlApi}/image-rest`, formData);
  }




}