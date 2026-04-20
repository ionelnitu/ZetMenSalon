import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CookieService {
  // true = acceptat, false = refuzat, null = nedecis
  mapsConsent = signal<boolean | null>(null);

  constructor() {
    const saved = localStorage.getItem('maps_consent');
    if (saved === 'true')  this.mapsConsent.set(true);
    if (saved === 'false') this.mapsConsent.set(false);
  }

  accept(): void {
    localStorage.setItem('maps_consent', 'true');
    this.mapsConsent.set(true);
    window.location.reload();
  }

  decline(): void {
    localStorage.setItem('maps_consent', 'false');
    this.mapsConsent.set(false);
  }

  reset(): void {
    localStorage.removeItem('maps_consent');
    this.mapsConsent.set(null);
  }

  get hasDecided(): boolean {
    return this.mapsConsent() !== null;
  }
}
