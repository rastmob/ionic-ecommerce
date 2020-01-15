import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  productDetail =
    {
      id:6,
      name: "iPhone 11 Pro Max 64GB Cep Telefonu",
      imgUrl: [
        {
          imgSrc:"https://i1.adis.ws/i/boohooamplience/agg70146_light%20blue_xl?$product_image_main_mobile$"
        },
        {
          imgSrc:"https://i1.adis.ws/i/boohooamplience/agg70146_light%20blue_xl?$product_image_main_mobile$"
        },
        {
          imgSrc: "https://i1.adis.ws/i/boohooamplience/agg70146_light%20blue_xl?$product_image_main_mobile$"
        }
      ],
      categoryId:1,
      price:33.99,
    };

  constructor() { }

  ngOnInit() {
  }

}
