import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { StorageService } from 'src/app/states/services/storage.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  // @ViewChild(IonContent, true) content: IonContent;

  
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
      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    };

    
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

  constructor(private storageService: StorageService) { }

  ngOnInit() {
  }

  scrollToTop(){
    // this.content.scrollToTop(1500);
  }

  addToCart(productId){
    this.storageService.addToCart(productId);
  }

  buyNow(){
    
  }

}
