import { Injectable } from '@angular/core';
import { Store } from './store.model';
import { STORES } from './mock-stores';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class StoreService {
    stores: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.stores = database.list('stores');
  }

  getStores() {
    return this.stores;
  }

  addStore(newStore: Store) {
    this.stores.push(newStore);
  }

  getStoreById(storeId: number) {
    // for (var i = 0; i <= STORES.length - 1; i++) {
    //   if (STORES[i].id === storeId) {
    //     return STORES[i];
    //   }
    // }
  }


}
