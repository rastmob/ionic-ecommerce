import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/states/services/order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  orderDetail:any;
  constructor(private route:ActivatedRoute, private orderService:OrderService) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.orderDetail = this.orderService.getOrderDetails(+params['id']);
   }); 
  }

}
