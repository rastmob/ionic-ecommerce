import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryDetailPage } from './category-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CategoryDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryDetailPageRoutingModule {}
