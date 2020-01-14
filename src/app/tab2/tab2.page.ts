import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categories: any;

  constructor() {}
  
  ngOnInit(){
    this.categories = [
      'Clothing',
      'Shoes',
      'Consumer Electronics',
      'Books',
      'Cosmetics & Body care',
      'Food & Drinks',
      'Furniture',
      'Sports & Outdoor',
      'Toys',
      'Baby Products',
      'Garden & pets',
      'Shoes',
      'Consumer Electronics',
      'Sports & Outdoor',
      'Cosmetics & Body care',
  ];
  }


  addToCard(){

  }

  viewDetail(){

  }

}
