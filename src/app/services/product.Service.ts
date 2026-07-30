import { Injectable } from '@angular/core';
import { Product } from '../products/interface/product.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [

    {
      id: 1,
      name: 'Shampoo',
      brand: 'ZetMen',
      category: 'Shampoo',
      description: 'Description',
      price: 89,
      image: 'assets/products/shampoo.png'
    },

    {
      id: 2,
      name: 'AfterShave',
      brand: 'ZetMen',
      category: 'aftershave',
      description: 'Description',
      price: 95,
      image: 'assets/products/aftershave.png'
    },

    {
      id: 3,
      name: 'Conditioner',
      brand: 'ZetMen',
      category: 'conditioner',
      description: 'Description',
      price: 78,
      image: 'assets/products/conditioner.png'
    },
    {
      id: 4,
      name: 'Sahving Cream',
      brand: 'ZetMen',
      category: 'saving cream',
      description: 'Description',
      price: 78,
      image: 'assets/products/shaving_cream.png'
    }

  ];

  getProducts(): Product[] {
    return this.products;
  }

}