import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninPage } from './signin/signin.page';
import { SignupPage } from './signup/signup.page';
import { LayoutPrimaryPage } from 'src/app/shared/layout-primary/layout-primary.page';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: '',
    component: LayoutPrimaryPage,
    children: [
      {
        path: 'signin',
        component: SigninPage,
      },
      {
        path: 'signup',
        component: SignupPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
