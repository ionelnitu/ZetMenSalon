import { Component } from '@angular/core';
import { NavbarComponent }       from './components/navbar/navbar.component';
import { HeroComponent }         from './components/hero/hero.component';
import { AboutComponent }        from './components/about/about.component';
import { ServicesStripComponent } from './components/services-strip/services-strip.component';
import { FindUsComponent }       from './components/find-us/find-us.component';
import { FooterComponent }       from './components/footer/footer.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ServicesStripComponent,
    FindUsComponent,
    FooterComponent,
    CookieBannerComponent,
  ],
  template: `
 <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
