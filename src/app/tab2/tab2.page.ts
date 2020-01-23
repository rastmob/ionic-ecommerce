import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../states/services/category.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  categories: any;

  constructor(private categoryService:CategoryService) {}
  
  ngOnInit(){
    this.categories = this.categoryService.getCategories();
  }


  addToCard(){

  }

  viewDetail(){

  }

}
