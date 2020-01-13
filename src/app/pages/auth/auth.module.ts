import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [SigninComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    SharedModule,
    
  ]
})
export class AuthModule { }
