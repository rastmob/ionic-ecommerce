import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/states/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  user = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }
   /* signInWithTwitter() {
      this.authService.signInWithTwitter()
      .then((res) => { 
          this.router.navigate(['my-profile'])
        })
      .catch((err) => console.log(err));
    }


    signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
          this.router.navigate(['my-profile'])
        })
      .catch((err) => console.log(err));
    } */


    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['tabs'])
        })
      .catch((err) => console.log(err));
    }

    signInWithGithub() {
      this.authService.signInWithGithub()
      .then((res) => {
          this.router.navigate(['my-profile'])
        })
      .catch((err) => console.log(err));
    }

    signInWithEmail() {

      this.authService.signInRegular(this.user.email, this.user.password)
        .then((res) => {
          console.log(res);
          this.router.navigate(['my-profile']);
        })
        .catch((err) => console.log('error: ' + err));
    }




}
