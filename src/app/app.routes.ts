import { Routes } from '@angular/router';
import { PricesComponent } from './components/prices/prices.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { PrivacyComponent } from './components/privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'privacy', component: PrivacyComponent} ,       // pagina principală
  { path: 'prices', component: PricesComponent }, // pagina de prețuri
  { path: '**', redirectTo: '' }                // orice altă rută → acasă
];