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
    'Precision Haircuts',
    'Balayage & Highlights',
    'Keratin Treatments',
    'Bridal Styling',
    'Color Correction',
    'Deep Conditioning',
    'Blow Dry & Finish',
    'Extensions',
    'Scalp Therapy',
  ];

  // Duplicate for seamless infinite marquee
  get doubled() {
    return [...this.services, ...this.services];
  }
}
