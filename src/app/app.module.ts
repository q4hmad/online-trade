import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';
import { AdminComponent } from './admin/admin.component';
import { EditStoreComponent } from './edit-store/edit-store.component';


export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    StoreComponent,
    StoreDetailComponent,
    AdminComponent,
    EditStoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
