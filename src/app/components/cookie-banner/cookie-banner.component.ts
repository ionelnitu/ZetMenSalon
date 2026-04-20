import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.scss',
})
export class CookieBannerComponent {
  cookieService = inject(CookieService);
}
