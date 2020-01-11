import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutPrimaryComponent } from './layout-primary/layout-primary.component';



@NgModule({
  declarations: [LayoutPrimaryComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
