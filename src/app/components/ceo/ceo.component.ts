import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

interface Accomplishment {
  image: string;
  year: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-ceo',
  standalone: true,
  imports: [CommonModule,RouterLink,NavbarComponent],
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
      image: 'assets/firstCertificate.jpeg',
      year: '2025',
      title: 'Fade Academy by Ciprian Ungureanu',
      desc: " Este locul unde am invatat tehnici avansate de fade si formele de top. Aici am aflat ca frizerii sunt ca o familie si ca promotorul acestui curent este Ciprian Ungureanu.  Dupa acest curs am plecat cu un bagaj consistent de informatii, motivat si pregatit sa fac fata oricarei provocari. In afara de tehnici aici am avut parte de mentoring si subiecte motivationale. Un loc unde m-am simtit acasa. Iar asta iti da incredere si siguranta ca esti acolo unde trebuie. Am plecat cu o sete imensa de a ma descoperi si a ma provoca pentru a deveni varianta mea mai buna, zi de zi.",
    },
    {
      image: 'assets/2ndCertificate.jpg',
      year: '2024',
      title: 'The Quarters Academy Birmingham,',
      desc: 'Aici am avut curs intensiv de barbering cu o echipa extraordinara. Am studiat partea teoretica si practica la un nivel academic in ceea ce priveste tehnicile de fade si foarfeca, tipurile de par, anatomia scalpului si alegerea formei tunsorii. Un curs care te ajuta sa intelegi daca mergi mai departe sau nu.  Unde doar pasiunea si dorinta de a fi mai bun ca ieri, sunt criteriile de baza.',
    },
    {
      image: 'assets/3rdCertificate.jpeg',
      year: '2025',
      title: 'Cognitive Academy',
      desc: 'un loc mic si chochet din inima Londrei. Creatorul acestui concept este extraordinarul Sean Moore. Un profesionist care parca vine dintr-o alta dimensiune. Fiecare taietura de foarfeca are o poveste si creeaza o alta noua.  Tot ce am invatat aici a fost sa lasi imaginatia sa te ghideze, sa nu trasezi linii rigide si sa creezi perfectiunea din imperfectiuni. Sean este un creator si un mentor de exceptie, pot spune fara a exagera, unic in ceea ce face.A fost o experienta care mi-a dat aripi si m-a ghidat catre o altfel de abordare a acestei frumoase meserii. O meserie atat de complexa care poate fi dusa la nivel de arta doar prin pasiune si prin dorinta de a te simti o parte din ceea de creezi.Cu astfel de experiente intelegi ca taiatul parului nu este atat de simplu pana nu inveti sa creezi o conexiune intre tehnica si libertatea de a-ti folosi imaginatia.',
    },
    {image: 'assets/4thCertificate.jpeg',
      year: '2025',
      title: 'The Barber Bash',
      desc: ' o echipa extraordinara plina de energie, avandu-i protagonisti pe Brodie Raeside si Ollie Foster. Aici am invatat sa iti oferi libertatea de a interpreta fiecare tunsoare fara a urma tehnici stricte. A nu se confunda cu ignorarea tehnicilor de baza a tunsorii, ci tot ce tine de modul in care le aplici si cand.Un traning care te face dupa 8-10 ore sa pleci cu mai multa energie decat ai avut cand ai venit. Am plecat cu ideea ca atunci cand mintea nu e ingradita de prejudecati, creatia isi face loc. Iar tot ce faci este parte din povestea ta, fara a pierde o secunda din a face ce iti place si ce te face fericit.',
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
