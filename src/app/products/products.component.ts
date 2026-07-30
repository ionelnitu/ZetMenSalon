import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { ProductService } from '../services/product.Service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
    
  products = this.productService.getProducts();
  selectedImage: string | null = null;
  
  constructor(private productService: ProductService){}



openImage(image: string) {
  this.selectedImage = image;
}

closeImage() {
  this.selectedImage = null;
}

}
