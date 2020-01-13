import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrls: ['./progress-loader.component.scss'],
})
export class ProgressLoaderComponent implements OnInit {

  items = [];

  @Input() set numberOfRows(val: number) {
      this.items = Array.from({length: val}, (v, i) => i);
  }

  constructor() {
  }

  ngOnInit() {}

}
