import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/states/services/auth.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
})
export class MyProfilePage implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
