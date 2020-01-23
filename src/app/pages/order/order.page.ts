import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/states/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  orders:any;
  constructor(private orderService:OrderService) { }

  ngOnInit() {


    this.orders = this.orderService.getAllOrders();
  }

  

}
