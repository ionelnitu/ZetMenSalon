import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Accomplishment {
  image: string;
  year: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-ceo',
  standalone: true,
  imports: [CommonModule,RouterLink],
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
      image: '/assets/firstCertificate.jpeg',
      year: '2025',
      title: 'Fade Academy by Ciprian Ungureanu',
      desc: " Este locul unde am invatat tehnici avansate de fade si formele de top. Aici am aflat ca frizerii sunt ca o familie si ca promotorul acestui curent este Ciprian Ungureanu.  Dupa acest curs am plecat cu un bagaj consistent de informatii, motivat si pregatit sa fac fata oricarei provocari. In afara de tehnici aici am avut parte de mentoring si subiecte motivationale. Un loc unde m-am simtit acasa. Iar asta iti da incredere si siguranta ca esti acolo unde trebuie. Am plecat cu o sete imensa de a ma descoperi si a ma provoca pentru a deveni varianta mea mai buna, zi de zi.",
    },
    {
      image: '/assets/2ndCertificate.jpg',
      year: '2024',
      title: 'The Quarters Academy Birmingham,',
      desc: 'Aici am avut curs intensiv de barbering cu o echipa extraordinara. Am studiat partea teoretica si practica la un nivel academic in ceea ce priveste tehnicile de fade si foarfeca, tipurile de par, anatomia scalpului si alegerea formei tunsorii. Un curs care te ajuta sa intelegi daca mergi mai departe sau nu.  Unde doar pasiunea si dorinta de a fi mai bun ca ieri, sunt criteriile de baza.',
    },
    {
      image: '',
      year: '2022',
      title: 'Most Influential Stylist',
      desc: 'Named among the top 10 most influential hair artists shaping the industry.',
    },
    {image: '',
      year: '2020',
      title: 'Entrepreneur of the Year',
      desc: 'Awarded for pioneering sustainability practices in high-end salon operations.',
    },
    {image: '',
      year: '2018',
      title: 'Innovation in Hair Care',
      desc: 'Debuted the NOIR Signature Repair Treatment, now used in salons across 14 countries.',
    },
    {image: '',
      year: '2015',
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
    window.scrollTo(0, 0);
  }
}
