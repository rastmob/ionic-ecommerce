import { Component, OnInit, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-media-skeleton',
  templateUrl: './media-skeleton.component.html',
  styleUrls: ['./media-skeleton.component.scss'],
})
export class MediaSkeletonComponent implements OnInit {

  media = '';

  @HostBinding('class.img-loaded') imageLoaded = false;

  @Input()
  set src(val: string) {
      this.media = (val !== undefined && val !== null) ? val : '';
  }
  constructor() {
  }
  ngOnInit(){

  }

  loaded() {
      this.imageLoaded = true;
  }

  


}
