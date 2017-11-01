import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

import { Store } from '../store.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [StoreService]
})
export class AdminComponent implements OnInit {

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  submitForm(name: string, details: string) {
    let newStore: Store = new Store(name, details);
  this.storeService.addStore(newStore);
  }
}
