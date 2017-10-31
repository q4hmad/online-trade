import { Injectable } from '@angular/core';
import { Store } from './store.model';
import { STORES } from './mock-stores';


@Injectable()
export class StoreService {

  constructor() { }

  getStores() {
    return STORES;
  }


}
