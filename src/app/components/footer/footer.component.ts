import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();

  socials = [
    { label: 'Instagram', href: 'https://www.instagram.com/madalin.zetmen/' },
    { label: 'Facebook',  href: 'https://www.facebook.com/people/Zetmen/61566839835495/' },
  ];
}
