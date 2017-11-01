import { Component, Input, OnInit } from '@angular/core';
import { StoreService }  from '../store.service';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css'],
  providers: [StoreService]
})
export class EditStoreComponent implements OnInit {
  @Input() selectedStore;

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  beginUpdatingStore(storeToUpdate) {
    this.storeService.updateStore(storeToUpdate);
  }

}
