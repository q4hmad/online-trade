import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutComponent }   from './about/about.component';
import { StoreComponent }   from './store/store.component';
import { StoreDetailComponent }   from './store-detail/store-detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
   path: 'about',
   component: AboutComponent
 },
 {
   path: 'store',
   component: StoreComponent
 },
 {
   path: 'stores/:id',
   component: StoreDetailComponent
 }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
