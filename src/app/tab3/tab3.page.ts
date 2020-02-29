import { Component } from '@angular/core';
import { StorageService } from '../states/services/storage.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private storageService:StorageService) {}
  bags;

  ngOnInit(){
    this.bags = this.storageService.getAllBagItems();
  }



  updateCount(){
    
  }


  unread(item){
    
  }
}
