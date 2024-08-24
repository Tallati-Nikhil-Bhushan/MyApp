import { Component } from '@angular/core';
import { Product } from '../Product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-test-observable',
  standalone: true,
  imports: [],
  templateUrl: './test-observable.component.html',
  styleUrl: './test-observable.component.css'
})
export class TestObservableComponent {
  product:Product = new Product()
  productForm = new FormGroup({
    brand: new FormControl('',[Validators.required,Validators.minLength(3)]),
    price: new FormControl(0,[Validators.required,Validators.min(0)]),
    qty : new FormControl(0,[Validators.required,Validators.min(1)]),
    description : new FormControl('',[Validators.required,Validators.minLength(3)])
  })

  constructor(private productService:ProductService){}

  OnSubmit(){
   
    this.productService.saveProduct(this.product)
  }
}
