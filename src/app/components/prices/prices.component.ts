import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.scss',
})
export class PricesComponent {}
