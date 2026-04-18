import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-find-us',
  standalone: true,
  templateUrl: './find-us.component.html',
  styleUrl: './find-us.component.scss',
})
export class FindUsComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  contactInfo = [
    {
      icon: '📍',
      label: 'Address',
      value: " Strada Zorilor 16, Brașov",
    },
    {
      icon: '🕐',
      label: 'Hours',
      value: 'Mon–Sat: 9:00 AM – 8:00 PM<br/>Sunday: 10:00 AM – 5:00 PM',
    },
    {
      icon: '📞',
      label: 'Reservations',
      value: 'contact@zetmansalon.com',
    },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 120);
          }
        });
      },
      { threshold: 0.12 }
    );
    this.revealEls.forEach((el) => observer.observe(el.nativeElement));
  }
}
