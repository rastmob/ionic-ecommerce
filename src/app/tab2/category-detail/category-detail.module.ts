import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoryDetailPageRoutingModule } from './category-detail-routing.module';

import { CategoryDetailPage } from './category-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoryDetailPageRoutingModule
  ],
  declarations: [CategoryDetailPage]
})
export class CategoryDetailPageModule {}
