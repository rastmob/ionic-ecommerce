import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }


  getAllOrders(): Observable<any>{
    let url = './assets/order.json';
    return this.http.get(url);
  }
}
