import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlApiUser = environment.API_URL_USER

  constructor(private http:HttpClient) {

   }

   getAllUser():Observable<User[]>{
    return this.http.get<User[]>(this.urlApiUser)
  }

   createUser(user: User):Observable<User>{
    return this.http.post<User>(this.urlApiUser,user);
   }

   deleteUser(id: number):Observable<any>{
    return this.http.delete<User>(`${this.urlApiUser}/${id}`);
   }

   putUser(id:number, user: User):Observable<User>{
    return this.http.put<User>(`${this.urlApiUser}/${id}`, user);
   }

   getByidSupplier(id:number):Observable<User>{
    return this.http.get<User>(`${this.urlApiUser}/${id}`)
   }

   loginUser(username: string, password: string ): Observable<User>{
    const aux = { 
      username: username,
      password: password
    }
    return this.http.post<User>(`${this.urlApiUser}/login`,aux)
  
   }

 
}
