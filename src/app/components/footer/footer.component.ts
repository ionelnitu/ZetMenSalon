import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CookieService } from '../../services/cookie.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();
  cookieService = inject(CookieService);

  socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/madalin.zetmen/' },
    { label: 'Facebook',  href: 'https://www.facebook.com/people/ZetMen-Official/61586790017242/' },
  ];

  resetCookies(): void {
    this.cookieService.reset();
    window.location.reload(); // reîncarcă pagina și apare din nou banner-ul
  }
}
