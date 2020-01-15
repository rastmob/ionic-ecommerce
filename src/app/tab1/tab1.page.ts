import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements  OnInit {
 

  itemSizes = [
    'S',
    'M',
    'L',
  ];

  
  items = [
  {
    id:1,
    name: "CHUWI 2019 Hipad LTE MTK6797 X27 Deca Core Android 8.0 3GB",
    imgUrl: "https://cdn.akakce.com/xiaomi/xiaomi-redmi-8-64gb-z.jpg",
    categoryId:1,
    price:14.99,

  }, 
  {
    id:2,
    name: "Xiaomi Mi Note 10 128GB Cep Telefonu",
    imgUrl: "https://cdn.akakce.com/samsung/samsung-galaxy-a2-core-16gb-z.jpg",
    categoryId:1,
    price:18.99,

  }, 
  {
    id:3,
    name: "9T 64GB Cep Telefonu",
    imgUrl: "https://cdn.akakce.com/xiaomi/xiaomi-mi-9t-64gb-z.jpg",
    categoryId:1,
    price:11.99,

  }, 
  {
    id:4,
    name: "iPhone 11 64GB Cep Telefonu",
    imgUrl: "https://cdn.akakce.com/apple/iphone-11-64gb-z.jpg",
    categoryId:1,
    price:122.99,

  }, 
  {
    id:5,
    name: "iPhone XS",
    imgUrl: "https://cdn.akakce.com/apple/iphone-xs-64gb-z.jpg",
    categoryId:1,
    price:99.99,

  }, 
  {
    id:6,
    name: "iPhone 11 Pro Max 64GB Cep Telefonu",
    imgUrl: "https://cdn.akakce.com/apple/iphone-11-pro-max-64gb-z.jpg",
    categoryId:1,
    price:33.99,

  }, 
  ];

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

  constructor(){

  }
  

  ngOnInit(){

   

  }


}
