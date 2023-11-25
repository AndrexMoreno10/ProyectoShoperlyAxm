import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  urlApiSupplier = environment.API_URL_SUPPLIER

  constructor(private http:HttpClient) {

   }

   getAllSupplier():Observable<Supplier[]>{
    return this.http.get<Supplier[]>(this.urlApiSupplier)
  }

   createSupplier(supplier: Supplier):Observable<Supplier>{
    return this.http.post<Supplier>(this.urlApiSupplier,supplier);
   }

   deleteSupplier(id: number):Observable<any>{
    return this.http.delete<Supplier>(`${this.urlApiSupplier}/${id}`);
   }

   putSupplier(id:number, supplier: Supplier):Observable<Supplier>{
    return this.http.put<Supplier>(`${this.urlApiSupplier}/${id}`, supplier);
   }

   getByidSupplier(id:number):Observable<Supplier>{
    return this.http.get<Supplier>(`${this.urlApiSupplier}/${id}`)
   }
  }