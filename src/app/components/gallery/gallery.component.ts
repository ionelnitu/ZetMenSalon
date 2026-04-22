import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  computed,
  HostListener,
  ElementRef,
  ViewChild,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

export interface GalleryImage {
  src: string;
  alt: string;
  event: string;
  location: string;
  year: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit, OnDestroy {
  @ViewChild('lightboxEl') lightboxEl!: ElementRef;

  private http = inject(HttpClient);

  private _images = signal<GalleryImage[]>([]);

  loading = signal(true);
  error = signal(false);
  isFading = signal(false);

  currentIndex = signal(0);
  lightboxOpen = signal(false);
  lightboxIndex = signal(0);
  visibleCount = signal(3);

  private intervalId: any;
  private readonly FADE_DURATION = 400;
  private readonly SLIDE_INTERVAL = 5000;

  visibleImages = computed(() =>
    this._images().slice(this.currentIndex(), this.currentIndex() + this.visibleCount())
  );
  lightboxImage = computed(() => this._images()[this.lightboxIndex()]);
  totalImages = computed(() => this._images().length);
  totalDots = computed(() => Math.ceil(this._images().length / this.visibleCount()));
  activeDot = computed(() => Math.floor(this.currentIndex() / this.visibleCount()));
  canPrev = computed(() => this.currentIndex() > 0);
  canNext = computed(() => this.currentIndex() + this.visibleCount() < this._images().length);

  ngOnInit(): void {
    this.setVisibleCount();

    this.http.get<GalleryImage[]>('assets/gallery-images.json').subscribe({
      next: (data) => {
        this._images.set(data);
        this.loading.set(false);
        // porneste sliderul DOAR dupa ce imaginile sunt incarcate
        this.startSlider();
      },
      error: (err) => {
        console.error('Eroare galerie:', err);
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  // fade + schimba imaginile
  private triggerFade(changeFn: () => void): void {
    if (this.isFading()) return;

    this.isFading.set(true);

    setTimeout(() => {
      changeFn();
      // mica pauza ca Angular sa randeze noile imagini
      setTimeout(() => {
        this.isFading.set(false);
      }, 50);
    }, this.FADE_DURATION);
  }

  private startSlider(): void {
    this.intervalId = setInterval(() => {
      this.triggerFade(() => {
        if (this.canNext()) {
          this.currentIndex.update(i =>
            Math.min(this._images().length - this.visibleCount(), i + this.visibleCount())
          );
        } else {
          this.currentIndex.set(0); // reset la inceput
        }
      });
    }, this.SLIDE_INTERVAL);
  }

  private resetSlider(): void {
    clearInterval(this.intervalId);
    this.startSlider();
  }

  prev(): void {
    if (!this.canPrev()) return;
    this.resetSlider(); // reset timer la click manual
    this.triggerFade(() =>
      this.currentIndex.update(i => Math.max(0, i - this.visibleCount()))
    );
  }

  next(): void {
    if (!this.canNext()) return;
    this.resetSlider();
    this.triggerFade(() =>
      this.currentIndex.update(i =>
        Math.min(this._images().length - this.visibleCount(), i + this.visibleCount())
      )
    );
  }

  goToDot(dotIndex: number): void {
    this.resetSlider();
    this.triggerFade(() =>
      this.currentIndex.set(dotIndex * this.visibleCount())
    );
  }

  openLightbox(index: number): void {
    clearInterval(this.intervalId); // opreste sliderul cat timp e lightbox deschis
    this.lightboxIndex.set(this.currentIndex() + index);
    this.lightboxOpen.set(true);
    document.body.style.overflow = 'hidden';

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
    this.startSlider(); // reporneste sliderul dupa inchidere
  }

  lightboxPrev(): void {
    if (this.lightboxIndex() > 0) this.lightboxIndex.update(i => i - 1);
  }

  lightboxNext(): void {
    if (this.lightboxIndex() < this._images().length - 1)
      this.lightboxIndex.update(i => i + 1);
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
   this.setVisibleCount();
    this.currentIndex.set(0);
  }

  private setVisibleCount(): void {
  const w = window.innerWidth;
  if (w < 480) {
    this.visibleCount.set(1);      // telefoane mici → 2
  } else if (w < 768) {
    this.visibleCount.set(2);      // telefoane mari → 2
  } else if (w < 1024) {
    this.visibleCount.set(3);      // tablet → 2
  } else {
    this.visibleCount.set(3);      // desktop → 3
  }
}

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
    document.body.style.overflow = '';
    const navbar = document.querySelector('nav') as HTMLElement;
    if (navbar) navbar.style.display = '';
  }
}