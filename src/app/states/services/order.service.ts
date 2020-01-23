import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  getOrderDetails(productId:number): Observable<any>{
    let url = './assets/order.json';
     return this.http.get(url).pipe(
      map( arr => arr.find( r => r.id === productId))
      )
  } 

  getAllOrders(): Observable<any>{
    let url = './assets/order.json';
    return this.http.get(url);
  }
}
