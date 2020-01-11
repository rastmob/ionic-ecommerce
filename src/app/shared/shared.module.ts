import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPrimaryPage } from './layout-primary/layout-primary.page';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LayoutPrimaryPage],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
