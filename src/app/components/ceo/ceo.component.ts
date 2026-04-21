import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { GalleryComponent, GalleryImage } from '../gallery/gallery.component';

interface Accomplishment {
  image: string[];
  year: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-ceo',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent, GalleryComponent],
  templateUrl: './ceo.component.html',
  styleUrl: './ceo.component.scss',
})
export class CeoComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  // ─── Lightbox pentru diplome ───
  lightboxOpen = signal(false);
  lightboxImages = signal<string[]>([]);
  lightboxIndex = signal(0);

openLightbox(images: string[], startIndex = 0): void {
  this.lightboxImages.set(images);
  this.lightboxIndex.set(startIndex);
  this.lightboxOpen.set(true);
  document.body.style.overflow = 'hidden';
  // ascunde navbar
  const navbar = document.querySelector('nav') as HTMLElement;
  if (navbar) navbar.style.display = 'none';
}

closeLightbox(): void {
  this.lightboxOpen.set(false);
  document.body.style.overflow = '';
  // reafiseaza navbar
  const navbar = document.querySelector('nav') as HTMLElement;
  if (navbar) navbar.style.display = '';
}

  lightboxPrev(): void {
    if (this.lightboxIndex() > 0) {
      this.lightboxIndex.update(i => i - 1);
    }
  }

  lightboxNext(): void {
    if (this.lightboxIndex() < this.lightboxImages().length - 1) {
      this.lightboxIndex.update(i => i + 1);
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (event.key === 'ArrowLeft') this.lightboxPrev();
    if (event.key === 'ArrowRight') this.lightboxNext();
    if (event.key === 'Escape') this.closeLightbox();
  }




  accomplishments: Accomplishment[] = [
    {
      image: ['assets/firstCertificate.jpeg'],
      year: '10th August 2025',
      title: 'Fade Academy by Ciprian Ungureanu',
      desc: 'Este locul unde am invatat tehnici avansate de fade si formele de top. Aici am aflat ca frizerii sunt ca o familie si ca promotorul acestui curent este Ciprian Ungureanu. Dupa acest curs am plecat cu un bagaj consistent de informatii, motivat si pregatit sa fac fata oricarei provocari.',
    },
    {
      image: ['assets/3rdCertificate.jpeg'],
      year: '18th November 2025',
      title: 'Cognitive Academy',
      desc: 'Un loc mic si chochet din inima Londrei. Creatorul acestui concept este extraordinarul Sean Moore. Un profesionist care parca vine dintr-o alta dimensiune. Fiecare taietura de foarfeca are o poveste si creeaza o alta noua.',
    },
    {
      image: ['assets/4thCertificate.jpeg'],
      year: '16th November 2025',
      title: 'The Barber Bash',
      desc: 'O echipa extraordinara plina de energie, avandu-i protagonisti pe Brodie Raeside si Ollie Foster. Aici am invatat sa iti oferi libertatea de a interpreta fiecare tunsoare fara a urma tehnici stricte.',
    },
    {
      image: ['assets/5thCertificate.jpeg'],
      year: '23th November 2025',
      title: 'Menspire Academy',
      desc: 'Locul unde cred ca orice frizer de pe pamant si-ar dori sa ajunga macar o data. Josh Lamonaca nu cred ca mai are nevoie de nicio prezentare. Aici te simti intr-o alta dimensiune, fiecare prezentare este arta si fiecare cuvant este menit sa te motiveze.',
    },
    {
      image: ['assets/6thCertificate.jpeg', 'assets/7thCertificate.jpeg'],
      year: '18th January 2026',
      title: 'Inspire Barber Academy Brasov',
      desc: 'Locul unde l-am cunoscut pe George Hali. Un profesionist extraordinar, un om de o calitate rar intalnita si un prieten de nadejde. Aici am avut parte de o experienta cu o incarcatura de informatii practice si teoretice pe care nu le-am intalnit nicaieri.',
    },
    {
      image: ['assets/8thCertificate.jpeg'],
      year: '10th March 2026',
      title: 'Schwarzkopf Academy Bucuresti',
      desc: 'Aici am avut parte de o experienta extraordinara de coloristica alaturi Roymer Bolivar din Argentina. Am invatati tehnici si retete de coloristica unice create de el.',
    },
    {
      image: ['assets/2ndCertificate.jpg'],
      year: '25th October 2024',
      title: 'The Quarters Academy Birmingham',
      desc: 'Aici am avut curs intensiv de barbering cu o echipa extraordinara. Am studiat partea teoretica si practica la un nivel academic in ceea ce priveste tehnicile de fade si foarfeca, tipurile de par, anatomia scalpului si alegerea formei tunsorii.',
    },
  ];

  galleryImages: GalleryImage[] = [
    {
      src: 'assets/gallery/picture1.jpeg',
      alt: 'Campionat de barbering 2024',
      event: 'Campionat Național de Barbering',
      location: 'București',
      year: '2024',
    },
    {
      src: 'assets/gallery/picture2.jpeg',
      alt: 'Curs de formare avansată',
      event: 'Curs de Formare Avansată',
      location: 'Cluj-Napoca',
      year: '2023',
    },
    {
      src: 'assets/gallery/picture3.jpeg',
      alt: 'Expoziție profesională',
      event: 'Expoziție Profesională Hair Expo',
      location: 'Timișoara',
      year: '2023',
    },
    {
      src: 'assets/gallery/picture4.jpeg',
      alt: 'Workshop internațional',
      event: 'Workshop Internațional',
      location: 'Milano, Italia',
      year: '2022',
    },
    {
      src: 'assets/gallery/picture5.jpeg',
      alt: 'Competiție regională',
      event: 'Competiție Regională',
      location: 'Brașov',
      year: '2022',
    },
    {
      src: 'assets/gallery/picture6.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },
    {
      src: 'assets/gallery/picture7.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },
    {
      src: 'assets/gallery/picture8.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },
    {
      src: 'assets/gallery/picture9.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },
    {
      src: 'assets/gallery/picture10.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },
    {
      src: 'assets/gallery/picture11.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },
    {
      src: 'assets/gallery/picture12.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    }, {
      src: 'assets/zetmen/picture1.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },{
      src: 'assets/zetmen/picture5.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },{
      src: 'assets/zetmen/picture6.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },{
      src: 'assets/zetmen/picture4.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },{
      src: 'assets/zetmen/picture2.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },{
      src: 'assets/zetmen/picture3.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },{
      src: 'assets/zetmen/picture7.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },{
      src: 'assets/zetmen/picture8.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
    },{
      src: 'assets/zetmen/picture9.jpeg',
      alt: 'Masterclass tehnici moderne',
      event: 'Masterclass Tehnici Moderne',
      location: 'București',
      year: '2021',
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
