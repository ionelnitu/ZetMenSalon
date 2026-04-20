import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './components/prices/prices.component';
import { HomeComponent } from './home.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CeoComponent } from './components/ceo/ceo.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'privacy', component: PrivacyComponent} , 
  {path:'about-me', component: CeoComponent},      
  { path: 'prices', component: PricesComponent }, 
  { path: '**', redirectTo: '' }                
];
