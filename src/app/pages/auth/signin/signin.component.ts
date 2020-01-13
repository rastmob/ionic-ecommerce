import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/states/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  user = null;

  constructor(private authService: AuthService, private router: Router) {
  }


  ngOnInit() {
  }
  



}
