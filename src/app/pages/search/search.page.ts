import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  categories: any;
  isItemAvailable:boolean;

  constructor() {}
  
  ngOnInit(){
    this.initializeItems();
  this.isItemAvailable = false; 

  }



 initializeItems(){
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

onInput(ev: any) {
 this.initializeItems();
 const val = ev.target.value;
 if (val && val.trim() != '') {
     this.isItemAvailable = true;
     this.categories = this.categories.filter((item) => {
     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
 })
 }
}

  addToCard(){

  }

  viewDetail(){

  }



}
