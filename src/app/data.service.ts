import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  products: Product[] = [];

  constructor() { 

  //  this.products = [
  //     new Product('P001', 'Apple', 999.99, 'Apple iPhone 14 Pro Max, 256GB, Space Gray', 15),
  //     new Product('P002', 'Samsung', 799.99, 'Samsung Galaxy S23 Ultra, 128GB, Phantom Black', 25),
  //     new Product('P003', 'Sony', 299.99, 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones', 30),
  //     new Product('P004', 'Dell', 1199.99, 'Dell XPS 13, Intel i7, 16GB RAM, 512GB SSD', 10),
  //     new Product('P005', 'Microsoft', 199.99, 'Microsoft Surface Pro 9, 128GB SSD, Platinum', 20),
  //     new Product('P006', 'Canon', 649.99, 'Canon EOS R6 Full-Frame Mirrorless Camera', 8),
  //     new Product('P007', 'Bose', 399.99, 'Bose QuietComfort 45 Wireless Noise Cancelling Headphones', 18),
  //     new Product('P008', 'Apple', 249.99, 'Apple AirPods Pro (2nd generation)', 40),
  //     new Product('P009', 'HP', 499.99, 'HP Spectre x360 14, Intel i5, 8GB RAM, 256GB SSD', 12),
  //     new Product('P010', 'GoPro', 349.99, 'GoPro HERO11 Black Action Camera', 22),
  // ];
  }

  getProducts():Product[]{
    return this.products;
  }
}
