import {
  Component,
  Input,
  signal,
  computed,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface GalleryImage {
  src: string;
  alt: string;
  event: string;   // ex: "Campionatul Național de Barbering 2023"
  location: string; // ex: "București, România"
  year: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @ViewChild('lightboxEl') lightboxEl!: ElementRef;
  @Input() images: GalleryImage[] = [];

  currentIndex = signal(0);
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);
  intervalId: any;
  isFading = signal(false);
  animationDuration = 400;
  // Câte slide-uri sunt vizibile (3 pe desktop, 1 pe mobile)
  visibleCount = signal(3);

  currentImage = computed(() => this.images[this.currentIndex()]);
  lightboxImage = computed(() => this.images[this.lightboxIndex()]);

  totalDots = computed(() =>
    Math.ceil(this.images.length / this.visibleCount())
  );

  activeDot = computed(() =>
    Math.floor(this.currentIndex() / this.visibleCount())
  );

  visibleImages = computed(() => {
    const start = this.currentIndex();
    return this.images.slice(start, start + this.visibleCount());
  });

  canPrev = computed(() => this.currentIndex() > 0);
  canNext = computed(() =>
    this.currentIndex() + this.visibleCount() < this.images.length
  );

next(): void {
  if (!this.canNext()) return;

  this.triggerFade(() => {
    this.currentIndex.update((i) =>
      Math.min(this.images.length - this.visibleCount(), i + this.visibleCount())
    );
  });
}

prev(): void {
  if (!this.canPrev()) return;

  this.triggerFade(() => {
    this.currentIndex.update((i) =>
      Math.max(0, i - this.visibleCount())
    );
  });
}

  goToDot(dotIndex: number): void {
    this.currentIndex.set(dotIndex * this.visibleCount());
  }

  openLightbox(index: number): void {
    this.lightboxIndex.set(this.currentIndex() + index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';

    // exact ca la CEO — muta pe body ca sa scape de overflow:hidden din parinte
    setTimeout(() => {
      if (this.lightboxEl?.nativeElement) {
        document.body.appendChild(this.lightboxEl.nativeElement);
      }
    });

    const navbar = document.querySelector('nav') as HTMLElement;
    if (navbar) navbar.style.display = 'none';
  }

  closeLightbox(): void {
    this.lightboxOpen.set(false);
    document.body.style.overflow = '';
    const navbar = document.querySelector('nav') as HTMLElement;
    if (navbar) navbar.style.display = '';
  }



  lightboxPrev(): void {
    if (this.lightboxIndex() > 0) {
      this.lightboxIndex.update((i) => i - 1);
    }
  }

  lightboxNext(): void {
    if (this.lightboxIndex() < this.images.length - 1) {
      this.lightboxIndex.update((i) => i + 1);
    }
  }

  @HostListener('window:keydown', ['$event'])
  onKey(event: KeyboardEvent): void {
    if (!this.lightboxOpen()) return;
    if (event.key === 'ArrowLeft') this.lightboxPrev();
    if (event.key === 'ArrowRight') this.lightboxNext();
    if (event.key === 'Escape') this.closeLightbox();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.visibleCount.set(window.innerWidth < 768 ? 1 : 3);
    this.currentIndex.set(0);
  }

  ngOnInit(): void {
    this.startSlider();
    this.visibleCount.set(window.innerWidth < 768 ? 1 : 3);
  }
  ngOnDestroy(): void {
    document.body.style.overflow = '';
    const navbar = document.querySelector('nav') as HTMLElement;
    if (navbar) navbar.style.display = '';
    clearInterval(this.intervalId);
  }

  triggerFade(changeFn: () => void) {
  if (this.isFading()) return; // anti spam

  this.isFading.set(true);

  setTimeout(() => {
    changeFn();
    this.isFading.set(false);
  }, this.animationDuration);
}
startSlider() {
  this.intervalId = setInterval(() => {
    if (this.canNext()) {
      this.next();
    } else {
      this.goToDot(0); // reset la început
    }
  }, 5000);
}
}
