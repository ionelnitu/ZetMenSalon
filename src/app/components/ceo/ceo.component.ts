import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Accomplishment {
  year: string;
  award: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-ceo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ceo.component.html',
  styleUrl: './ceo.component.scss',
})
export class CeoComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '12',  label: 'Industry Awards'  },
    { number: '3',   label: 'Published Books'  },
  ];

  accomplishments: Accomplishment[] = [
    {
      year: '2024',
      award: 'Allure Magazine',
      title: 'Best Luxury Salon — New York',
      desc: "Recognized as the city's premier luxury hair destination for the third consecutive year.",
    },
    {
      year: '2023',
      award: 'NAHA Awards',
      title: 'Colorist of the Year',
      desc: 'National recognition for pioneering the "Shadow Balayage" technique adopted worldwide.',
    },
    {
      year: '2022',
      award: "Harper's Bazaar",
      title: 'Most Influential Stylist',
      desc: 'Named among the top 10 most influential hair artists shaping the industry.',
    },
    {
      year: '2020',
      award: 'Vogue Business',
      title: 'Entrepreneur of the Year',
      desc: 'Awarded for pioneering sustainability practices in high-end salon operations.',
    },
    {
      year: '2018',
      award: 'WWD Beauty Summit',
      title: 'Innovation in Hair Care',
      desc: 'Debuted the NOIR Signature Repair Treatment, now used in salons across 14 countries.',
    },
    {
      year: '2015',
      award: 'American Salon',
      title: 'Top 100 Salons in America',
      desc: 'NOIR ranked #7 among the most prestigious salons in the United States, five years after opening.',
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
