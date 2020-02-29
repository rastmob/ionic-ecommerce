import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/states/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  email: string;
  password: string;
  namesurname:string;
  
  constructor() { }

  ngOnInit() {}

  signUp() {
   // this.authService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signOut(){

  }

}
