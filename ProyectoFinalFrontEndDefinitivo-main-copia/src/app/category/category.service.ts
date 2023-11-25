import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import {HttpClient} from '@angular/common/http';
import { Category } from './category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  urlApiCategory = environment.API_URL_CATEGORY

  constructor(private http:HttpClient) {

   }

   getAllCategory():Observable<Category[]>{
    return this.http.get<Category[]>(this.urlApiCategory)
  }

   createCategory(category: Category):Observable<Category>{
    return this.http.post<Category>(this.urlApiCategory,category);
   }

   deleteCategory(id: number):Observable<any>{
    return this.http.delete<Category>(`${this.urlApiCategory}/${id}`);
   }

   putCategory(id:number, category: Category):Observable<Category>{
    return this.http.put<Category>(`${this.urlApiCategory}/${id}`, category);
   }

   getByidCategory(id:number):Observable<Category>{
    return this.http.get<Category>(`${this.urlApiCategory}/${id}`)
   }
  
  }
