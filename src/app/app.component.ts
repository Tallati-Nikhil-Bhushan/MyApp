import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './color/color.component';
import { DataComponent } from './data/data.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';


@Component({
  selector: 'myapp-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,ColorComponent,DataComponent,ReactiveFormsModule,ReactiveComponent,FormbuilderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit,OnChanges,DoCheck,AfterContentChecked,AfterContentInit,AfterViewInit,AfterViewChecked,OnDestroy{

  title:string = "from parent ";

  constructor(){
    console.log("constructor called parent");
  }

  ngAfterContentChecked(): void {
    console.log("after content checked parent");
  }

  ngAfterContentInit(): void {
    console.log("after content init parent");
  }

  ngAfterViewChecked(): void {
    console.log("after view checked parent");
  }

  ngAfterViewInit(): void {
    console.log("after view init parent");
  }

  ngDoCheck(): void {
    console.log("do check parent");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes parent");
  }

  ngOnDestroy(): void {
    console.log("on destroy parent");
  }

  ngOnInit(): void {
    console.log("on init parent");
  }
  
  // title = 'Nikhil Bhushan';
  // location = 'Trivandrum';
  // company = 'UST Global';

  // productId = 'AZ101#237';
  // description = "Dual Camera Dual Sim 256 GB";
  // available = true;
  // instock = this.available;
  // qty = 200;
  // orderqty = 0; 
  // orderDate : Date = new Date;

  // deliverColour = 'red';

  // products = [{"productId":"12234",
  //               "description":"Mobile",
  //               "price":"7500"
  // },{"productId":"12234",
  //               "description":"Mobile",
  //               "price":"7500"},{"productId":"12234",
  //               "description":"Mobile",
  //               "price":"7500"},{"productId":"12234",
  //               "description":"Mobile",
  //               "price":"7500"}]

  // res: string = '';

  // // Method to determine the range of the value
  // getRes(): string {
  //   if (this.orderqty < this.qty) {
  //     return 'full';
  //   } else if (this.orderqty == this.qty) {
  //     return 'exact';
  //   } else {
  //     return 'not';
  //   }
  // }

  // printOrder(input:any):void{
  //   console.log('Order Details: '+input + " placed");
  //   this.res = this.getRes();
  // }
}
