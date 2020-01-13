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
  private userDetails: firebase.User = null;
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
      this.user = _firebaseAuth.authState;
this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          }
          else {
            this.userDetails = null;
          }
        }
      );
  }
signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }
signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }
signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }
isLoggedIn() {
  if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.router.navigate(['/']));
  }
}