import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { StorageService } from 'src/app/states/services/storage.service';
import { ProductService } from 'src/app/states/services/product.service';
import { pipe } from 'rxjs';
import { filter, find, map } from 'rxjs/operators';
import { Product } from 'src/app/states/models/product.model';
import { ActivatedRoute } from '@angular/router';
import { Cart } from 'src/app/states/models/card.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {

  productDetail;
  productId;
  setSize: string;
  itemSizes = [
    'S',
    'M',
    'L',
    'X'
  ];

  colors = [
    'Red',
    'Blue',
    'Yellow',
    'Grey'
  ]

  constructor(private storageService: StorageService, private productService: ProductService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productDetail = this.productService.getProductDetails(+params['id']);
    });
  }

  scrollToTop() {
    // this.content.scrollToTop(1500);
  }


  addToCart() {
    this.productDetail.subscribe(
      data => this.initCart(data)
    );
  }

  initCart(item: Product) {
    const cartItem = new Cart(item);
    cartItem.isChecked = true;
    cartItem.quantity = 1;
    cartItem.name = item.name;
    cartItem.id = item.id;
    cartItem.price = item.price;
    cartItem.imgUrl = item.imgUrl[0];
    cartItem.size = this.setSize;
  }

  buyNow(item) {

  }


  onSetSize(itemSize) {
    this.setSize = itemSize;
  }

  onSelect(itemSize){

  }
}
