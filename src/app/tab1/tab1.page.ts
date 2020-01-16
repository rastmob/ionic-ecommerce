import { Component, OnInit } from '@angular/core';

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
  

   // video : 1 https://video.asos-media.com/products/test-desc/13557437-catwalk-AVS.m3u8
   // video2 : https://video.asos-media.com/products/test-desc/13713467-catwalk-AVS.m3u8
   // video3: https://video.asos-media.com/products/test-desc/12732001-catwalk-AVS.m3u8
   
  items = [
  {
    id:1,
    name: "DESIGN super fluffy yarn co-ord in Stone",
    imgUrl: "/assets/1-2.jfif",
    categoryId:1,
    price:14.99,
  }, 
  {
    id:2,
    name: "Lounge premium knitted jumper and wide leg trouser with splits",
    imgUrl: "/assets/2-2.jfif",
    categoryId:1,
    price:18.99,

  }, 
  {
    id:3,
    name: "Maternity lounge off shoulder sweat & over the bump legging set",
    imgUrl: "/assets/3-2.jfif",
    categoryId:1,
    price:11.99,

  }, 
  {
    id:4,
    name: "Satin animal tape bomber jacket & jogger",
    imgUrl: "/assets/4-2.jfif",
    categoryId:1,
    price:122.99,

  }, 
  {
    id:5,
    name: "Vesper cross back midi dress in black",
    imgUrl: "/assets/5-1.jfif",
    categoryId:1,
    price:74.66,

  }, 
  {
    id:6,
    name: "Neon boucle suit",
    imgUrl: "/assets/6-2.jfif",
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

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }


}
