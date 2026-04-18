import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  features = [
    { title: 'Haircuts & Styling', desc: 'Precision cuts tailored to your features' },
    { title: 'Color & Balayage',   desc: 'Bespoke color by master colorists' },
    { title: 'Treatments',         desc: 'Deep conditioning & keratin therapy' },
    { title: 'Bridal',             desc: 'Luxury bridal hair packages' },
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
