import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasketPage } from './basket.page';

const routes: Routes = [
  {
    path: '',
    component: BasketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasketPageRoutingModule {}
