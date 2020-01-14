import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LayoutPrimaryComponent } from './layout-primary/layout-primary.component';
import { ProgressLoaderComponent } from './progress-loader/progress-loader.component';
import { MediaSkeletonComponent } from './media-skeleton/media-skeleton.component';



@NgModule({
  declarations: [LayoutPrimaryComponent, ProgressLoaderComponent, MediaSkeletonComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports : [
    FormsModule,
    ReactiveFormsModule,
    ProgressLoaderComponent,
    MediaSkeletonComponent
  ]
})
export class SharedModule { }
