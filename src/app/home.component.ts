import { Component } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { ServicesStripComponent } from "./components/services-strip/services-strip.component";
import { FindUsComponent } from "./components/find-us/find-us.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CookieBannerComponent } from "./components/cookie-banner/cookie-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent, HeroComponent, AboutComponent,
    ServicesStripComponent, FindUsComponent, FooterComponent,
    CookieBannerComponent,
  ],
  template: `
    <app-cookie-banner></app-cookie-banner>
    <app-navbar></app-navbar>
    <app-hero></app-hero>
    <app-about></app-about>
    <app-services-strip></app-services-strip>
    <app-find-us></app-find-us>
    <app-footer></app-footer>
  `,
})
export class HomeComponent {}