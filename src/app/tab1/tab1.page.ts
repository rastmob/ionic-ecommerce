import { Component, OnInit } from '@angular/core';
import { ProductService } from '../states/services/product.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements  OnInit {
 
  selectedProducts = [
  {
    id:1,
    name: "CHUWI 2019 Hipad LTE MTK6797 X27 Deca Core Android 8.0 3GB",
    imgUrl: "https://cdn.akakce.com/xiaomi/xiaomi-redmi-8-64gb-z.jpg",
    categoryId:1,
    price:14.99,
  }, 
  {
    id:1,
    name: "CHUWI 2019 Hipad LTE MTK6797 X27 Deca Core Android 8.0 3GB",
    imgUrl: "https://cdn.akakce.com/xiaomi/xiaomi-redmi-8-64gb-z.jpg",
    categoryId:1,
    price:14.99,
  }, 
  ];


  itemSizes = [
    'S',
    'M',
    'L',
    'X'
  ];


   selectedCategories = [
      'Clothing',
      'Shoes',
      'Books',
  ];
  
   
  items:any=[];

  slides = [
    {
      id:1,
      imgUrl: "https://inews.co.uk/images-i.jpimedia.uk/imagefetch/https://inews.co.uk/wp-content/uploads/2019/07/best-clothes-subscription-boxes.png?width=640",
    },
    {
      id:2,
      imgUrl: "https://inews.co.uk/images-i.jpimedia.uk/imagefetch/https://inews.co.uk/wp-content/uploads/2019/07/best-clothes-subscription-boxes.png?width=640",
    },
    {
      id:3,
      imgUrl: "https://inews.co.uk/images-i.jpimedia.uk/imagefetch/https://inews.co.uk/wp-content/uploads/2019/07/best-clothes-subscription-boxes.png?width=640",
    },
  ];

  constructor(private productService:ProductService){

  }
  

  ngOnInit(){


   this.items = this.productService.getAllProducts();
   

  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


}
