import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }



  getProductDetails(id:number): Observable<any>{
    let url = './assets/product.json';
    return this.http.get(url);
  }


  getAllProducts(): Observable<any>{
    let url = './assets/product.json';
    return this.http.get(url);
  }
}
