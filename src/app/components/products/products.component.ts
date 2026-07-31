import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

export interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  price: number;
  description: string;
  image: string;
  available: boolean;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  private http = inject(HttpClient);

  private _products = signal<Product[]>([]);
  loading = signal(true);
  error = signal(false);
  activeCategory = signal('toate');

  // numarul de telefon WhatsApp al salonului
  readonly WHATSAPP_NUMBER = '+40779219100'; // ← înlocuiește cu numărul real

  categories = [
    { key: 'toate',    label: 'Toate'     },
    { key: 'sampon',   label: 'Șampoane'  },
    { key: 'barba',    label: 'Barbă'     },
    { key: 'ras',      label: 'Ras'       },
    { key: 'tratament', label: 'Tratamente' },
  ];

  filteredProducts = computed(() => {
    const cat = this.activeCategory();
    const all = this._products();
    return cat === 'toate' ? all : all.filter(p => p.category === cat);
  });

  ngOnInit(): void {
    this.http.get<Product[]>('assets/products.json').subscribe({
      next: (data) => {
        this._products.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Eroare produse:', err);
        this.error.set(true);
        this.loading.set(false);
      },
    });
  }

  setCategory(cat: string): void {
    this.activeCategory.set(cat);
  }

  orderOnWhatsApp(product: Product): void {
    const message = encodeURIComponent(
      `Bună ziua! Aș dori să comand: *${product.name}* - ${product.brand} (${product.price} RON). Vă rog să mă contactați pentru detalii.`
    );
    window.open(`https://wa.me/${this.WHATSAPP_NUMBER}?text=${message}`, '_blank');
  }
}
