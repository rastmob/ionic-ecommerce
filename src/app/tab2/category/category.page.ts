import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/states/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  items:any=[];
  constructor(private productService:ProductService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.items = this.productService.getCategoryProducts((+params['id']));
    });
   
  }

}
