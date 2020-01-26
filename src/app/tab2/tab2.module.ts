import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: Tab2Page },  {
      path: 'category/:id',
      loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
    }])
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
