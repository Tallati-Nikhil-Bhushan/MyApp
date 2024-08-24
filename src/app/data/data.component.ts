import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './data.component.html',
  styleUrl: './data.component.css'
})
export class DataComponent {
  productData: Product[]=[];
  filteredProductData: Product[]=[];
  // product:Product = new Product("","",0,"",0);
  product:Product = new Product();


  constructor(private service:DataService){
    this.productData = service.getProducts();
    console.log(this.productData);
  }

  findProducts(input:string):void{
    this.filteredProductData = []
    for(let product of this.productData){
      if(product.brand.toLowerCase().includes(input.toLowerCase())){
        this.filteredProductData.push(product);
    }
  }
}

onSubmit(){
  this.productData.push(this.product)
}
}
