import { Component } from '@angular/core';
import { NavbarComponent }       from './components/navbar/navbar.component';
import { HeroComponent }         from './components/hero/hero.component';
import { AboutComponent }        from './components/about/about.component';
import { ServicesStripComponent } from './components/services-strip/services-strip.component';
import { FindUsComponent }       from './components/find-us/find-us.component';
import { CeoComponent }          from './components/ceo/ceo.component';
import { FooterComponent }       from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesStripComponent,
    FindUsComponent,
    CeoComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services-strip></app-services-strip>
    <app-find-us></app-find-us>
    <app-ceo></app-ceo>
    <app-footer></app-footer>
  `,
})
export class AppComponent {}
