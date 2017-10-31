import { Injectable } from '@angular/core';
import { Store } from './store.model';
import { STORES } from './mock-stores';


@Injectable()
export class StoreService {

  constructor() { }

  getStores() {
    return STORES;
  }

  getStoreById(storeId: number) {
    for (var i = 0; i <= STORES.length - 1; i++) {
      if (STORES[i].id === storeId) {
        return STORES[i];
      }
    }
  }


}
