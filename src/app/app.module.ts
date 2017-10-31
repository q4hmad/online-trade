import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { routing } from './app.routing';
import { AboutComponent } from './about/about.component';
import { StoreComponent } from './store/store.component';
import { StoreDetailComponent } from './store-detail/store-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutComponent,
    StoreComponent,
    StoreDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
