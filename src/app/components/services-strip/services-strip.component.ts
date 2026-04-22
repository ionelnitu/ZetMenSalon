import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-strip.component.html',
  styleUrl: './services-strip.component.scss',
})
export class ServicesStripComponent {
  services = [
    'Spa Facial',
    'Skin Fade',
    'Tuns clasic ',
    'Aranjat barba',
    'Tuns la urgenta',
    'Tuns copiii(6-12ani)',
    'Pachet ZetMen',
    'Pachet ZetMen Deluxe',
  ];

  // Duplicate for seamless infinite marquee
  get doubled() {
    return [...this.services, ...this.services];
  }
}
