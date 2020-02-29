import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  categories: any;
  isItemAvailable:boolean;
  myInput;
  shouldShowCancel; 
  constructor() {}
  
  ngOnInit(){
    this.initializeItems();
  this.isItemAvailable = false; 

  }



 initializeItems(){
  this.categories = [
    'Mobile Phones',
    'Laptops',
    'Computer Components',
    'Smart Electronics',
    'Portable Audio & Video',
    'Consumer Electronics',
    'Games & Accessories',
    'Hot Brands',
    'Video Games',
    'Audio & Video Equipments',
    'Mobile Phone Accessories',
    'iPhone Accessories',
    'Laptops',
    'Consumer Electronics',
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

  addToCard(id){

  }

  viewDetail(id){

  }

  onCancel(event){

  }




}
