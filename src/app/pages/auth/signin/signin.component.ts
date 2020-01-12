import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/states/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  email: string;
  password: string;
  constructor(public authService: AuthService) { }

  ngOnInit() {}

  signUp() {
    this.authService.SignUp(this.email, this.password);
    this.email = ''; 
    this.password = '';
  }

  signIn() {
    this.email = ''; 
    this.password = '';
  }

  signOut() {
    this.authService.SignOut();
  }

}
