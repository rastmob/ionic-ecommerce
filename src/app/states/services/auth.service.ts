import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private user: Observable<firebase.User>;
  public userData: firebase.User = null;

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
      this.user = angularFireAuth.authState;
      this.user.subscribe(
        (user) => {
          if (user) {
            this.userData = user;
            console.log(this.userData);
          } else {
            this.userData = null;
          }
        }
      );
  }


  /*
  signInWithFacebook() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithTwitter() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }
*/

  
  signInWithGoogle() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithGithub() {
    return this.angularFireAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );

    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  }


  isLoggedIn() {
  if (this.userData == null ) {
      return false;
    } else {
      return true;
    }
  }


  logout() {
    this.angularFireAuth.auth.signOut()
    .then((res) => this.router.navigate(['/signin']));
  }
}