import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutPrimaryComponent } from './layout-primary/layout-primary.component';
import { ProgressLoaderComponent } from './progress-loader/progress-loader.component';



@NgModule({
  declarations: [LayoutPrimaryComponent, ProgressLoaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports : [
    FormsModule,
    ReactiveFormsModule,
    ProgressLoaderComponent
  ]
})
export class SharedModule { }
