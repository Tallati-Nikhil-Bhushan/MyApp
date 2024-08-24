import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive.component.html',
  styleUrl: './reactive.component.css'
})
export class ReactiveComponent {
  productForm = new FormGroup({
    productId:new FormControl('',[Validators.required,Validators.min(4)]),
    brand: new FormControl(''),
    description:new FormControl(''),
    price: new FormControl(0),
    qty: new FormControl(0)
  });

  onSubmit(){
    console.error(this.productForm);
    console.log(this.productForm.value);
    console.log(this.productForm.controls['price'].value);
  }
}
