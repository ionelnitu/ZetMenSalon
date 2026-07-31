import { RouterModule, Routes } from '@angular/router';
import { PricesComponent } from './components/prices/prices.component';
import { HomeComponent } from './home.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CeoComponent } from './components/ceo/ceo.component';
import { Component } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'privacy', component: PrivacyComponent} , 
  {path:'about-me', component: CeoComponent},      
  { path: 'prices', component: PricesComponent }, 
  {path:'products', component: ProductsComponent},
  { path: '**', redirectTo: '' }                
];
