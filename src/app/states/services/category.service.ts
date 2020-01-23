import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }


  getCategories(): Observable<any>{
    let url = './assets/categories.json';
    return this.http.get(url);
  }
}
