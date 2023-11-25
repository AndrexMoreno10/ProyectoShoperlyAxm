import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  urlSearch = environment.API_URL_SEARCH

  constructor(private http: HttpClient) { }

  getSeachProduct(keyword:any) {
    const options = {
      headers: {
        'content-type': 'application/json',
      }
    }
    return this.http.get<any>(`${this.urlSearch}?name=${keyword}`,options);
  }


}
