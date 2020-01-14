import { Component, OnInit } from '@angular/core';
import { AuthService } from '../states/services/auth.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

}
