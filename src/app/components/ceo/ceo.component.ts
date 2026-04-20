import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

interface Accomplishment {
  image: string[];
  year: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-ceo',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent,FooterComponent],
  templateUrl: './ceo.component.html',
  styleUrl: './ceo.component.scss',
})
export class CeoComponent implements AfterViewInit {
  @ViewChildren('reveal') revealEls!: QueryList<ElementRef>;

  stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '12', label: 'Industry Awards' },
    { number: '3', label: 'Published Books' },
  ];

  accomplishments: Accomplishment[] = [
    {
      image: ['assets/firstCertificate.jpeg'],
      year: '10th August 2025',
      title: 'Fade Academy by Ciprian Ungureanu',
      desc: " Este locul unde am invatat tehnici avansate de fade si formele de top. Aici am aflat ca frizerii sunt ca o familie si ca promotorul acestui curent este Ciprian Ungureanu.  Dupa acest curs am plecat cu un bagaj consistent de informatii, motivat si pregatit sa fac fata oricarei provocari. In afara de tehnici aici am avut parte de mentoring si subiecte motivationale. Un loc unde m-am simtit acasa. Iar asta iti da incredere si siguranta ca esti acolo unde trebuie. Am plecat cu o sete imensa de a ma descoperi si a ma provoca pentru a deveni varianta mea mai buna, zi de zi.",
    },
    {
      image: ['assets/3rdCertificate.jpeg'],
      year: '18th November 2025',
      title: 'Cognitive Academy',
      desc: 'Un loc mic si chochet din inima Londrei. Creatorul acestui concept este extraordinarul Sean Moore. Un profesionist care parca vine dintr-o alta dimensiune. Fiecare taietura de foarfeca are o poveste si creeaza o alta noua.  Tot ce am invatat aici a fost sa lasi imaginatia sa te ghideze, sa nu trasezi linii rigide si sa creezi perfectiunea din imperfectiuni. Sean este un creator si un mentor de exceptie, pot spune fara a exagera, unic in ceea ce face.A fost o experienta care mi-a dat aripi si m-a ghidat catre o altfel de abordare a acestei frumoase meserii. O meserie atat de complexa care poate fi dusa la nivel de arta doar prin pasiune si prin dorinta de a te simti o parte din ceea de creezi.Cu astfel de experiente intelegi ca taiatul parului nu este atat de simplu pana nu inveti sa creezi o conexiune intre tehnica si libertatea de a-ti folosi imaginatia.',
    },
    {
      image: ['assets/4thCertificate.jpeg'],
      year: '16th November 2025',
      title: 'The Barber Bash',
      desc: 'O echipa extraordinara plina de energie, avandu-i protagonisti pe Brodie Raeside si Ollie Foster. Aici am invatat sa iti oferi libertatea de a interpreta fiecare tunsoare fara a urma tehnici stricte. A nu se confunda cu ignorarea tehnicilor de baza a tunsorii, ci tot ce tine de modul in care le aplici si cand.Un traning care te face dupa 8-10 ore sa pleci cu mai multa energie decat ai avut cand ai venit. Am plecat cu ideea ca atunci cand mintea nu e ingradita de prejudecati, creatia isi face loc. Iar tot ce faci este parte din povestea ta, fara a pierde o secunda din a face ce iti place si ce te face fericit.',
    },
    {
      image: ['assets/5thCertificate.jpeg'],
      year: '23th November 2025',
      title: 'Menspire Academy',
      desc: 'locul unde cred ca orice frizer de pe pamant si-ar dori sa ajunga macar o data.Josh Lamonaca nu cred ca mai are nevoie de nicio prezentare. De asemenea si o parte din staful sau, Jeffrey Batista si Sheil Venkatachalam. Aici te simti intr-o alta dimensiune, fiecare prezentare este arta si fiecare cuvant este menit sa te motiveze. Prezenta la un astfel de curs este pur si simplu o experienta despre care iti vei aminti tot timpul.  In afara de tehnici si practica primesti un vibe unic, o energie pe care nu o poti defini. O sedinta de mentorat oferita dupa multe ore de munca, turnee internationale, experiente si oameni cu povesti extraordinare. Am avut mai multe intalniri cu acesti oameni extraordinari, insa, cel mai mult mi-am dorit sa am un training oferit de ei in academia lor. Josh este sursa mea de inspiratie, are arta dialogului si fiecare cuvant are sens. Iar din punct de vedere tehnic cred ca este unic in modul in care abordeaza fiecare taietura din foarfeca. The best experience!',
    },
    {
      image: ['assets/6thCertificate.jpeg', 'assets/7thCertificate.jpeg'],
      year: '18th January 2026',
      title: 'Inspire Barber Academy Brasov',
      desc: 'Locul unde l-am cunoscut pe George Hali. Un profesionist extraordinar, un om de o calitate rar intalnita si un prieten de nadejde. Aici am avut parte de o experienta cu o incarcatura de informatii practice si teoretice pe care nu le-am intalnit nicaieri.  Intr-o atmosfera relaxanta si plina de sens am obtinut extrem de multe tipsuri de a obtine rezultate extraordinare intr-un timp mult mai scurt. George este un maestru al rabdarii si al creativitatii, de care are nevoie oricine macar o data in cariera. Am practicat fade-uri, forme de top, forme si vopsit barba intr-o maniera dincolo de limitele stricte ale tehnicilor de baza. Bagajul de informatii cu care am plecat mi-a imbunatatit calitatea lucrarilor, timpul de lucru si mi-a oferit mai multa incredere.',
    }, {
      image: ['assets/8thCertificate.jpeg'],
      year: '10th March 2026',
      title: 'Schwarzkopf Academy Bucuresti',
      desc: 'Aici am avut parte de o experienta extraordinara de coloristica alaturi Roymer Bolivar din Argentina. Am invatati tehnici si retete de coloristica unice create de el. Am experimentat aceste procedee cu rezultate excelente. Aici am invatat importanta responsabilitatii in astfel actiuni si riscurile pe care trebuie sa le eviti respectand cu strictete cantitatile si timpul de decolorare. Apoi partea de creativitate si colorostica parca desprinsa din alta lume. A fost o experienta care mi-a oferit si alte perspective asupra acestei meserii si libertatea de a-ti lasa imaginatia sa atinga noi dimensiuni ale creativitatii.'
    },
    {
      image: ['assets/2ndCertificate.jpg'],
      year: '25th October 2024',
      title: 'The Quarters Academy Birmingham,',
      desc: 'Aici am avut curs intensiv de barbering cu o echipa extraordinara. Am studiat partea teoretica si practica la un nivel academic in ceea ce priveste tehnicile de fade si foarfeca, tipurile de par, anatomia scalpului si alegerea formei tunsorii. Un curs care te ajuta sa intelegi daca mergi mai departe sau nu.  Unde doar pasiunea si dorinta de a fi mai bun ca ieri, sunt criteriile de baza.',
    }
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
