import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, inject, computed } from '@angular/core';
import { CookieService } from '../../services/cookie.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-find-us',
  standalone: true,
  templateUrl: './find-us.component.html',
  styleUrl: './find-us.component.scss',
})
export class FindUsComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;
  private sanitizer = inject(DomSanitizer);
  cookieService = inject(CookieService);

 mapsEmbedUrl = computed(() => {
    if (this.cookieService.mapsConsent() !== true) return null;
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.5247832076793!2d25.62001938485941!3d45.640282107155905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35dee0ff8709f%3A0x2364a08cdcff2eba!2sZETMEN!5e0!3m2!1sen!2sro!4v1775314381784!5m2!1sen!2sro' // URL-ul tău real
    );
  });

  
  contactInfo = [
    {
      icon: '📍',
      label: 'Adresă',
      value: 'Strada Zorilor 16, Brașov, Județ: Brașov',
    },
    {
      icon: '🕐',
      label: 'Program',
      value: 'Lun–Vin:09:00-20:00<br>',
    },
    {
      icon: '📞',
      label: 'Rezervări',
      value: '<a href="tel:+40722123456">+40 722 123 456</a>',
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
