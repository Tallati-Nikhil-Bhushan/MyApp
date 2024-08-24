import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-color',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})

export class ColorComponent implements OnInit,AfterViewChecked,AfterViewInit,AfterContentChecked,AfterContentInit,DoCheck,OnChanges {

  @Input()
  title:string = "hello";

  constructor(){
    console.log("constructor is called from child");
  }

  ngAfterViewChecked():void{
    console.log("ngAfterViewChecked is called from child");
  }
  
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit is called from child");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is called from child");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit is called from child");
  }

  ngDoCheck(): void {
    console.log("ngDoCheck is called from child");
  }

  ngOnInit(): void {
    console.log("ngOnInit is called from child");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called from child");
  }
  // selectedColor: string = 'white';
  // cityList: string[] = ['Hyderabad', 'Benguluru', 'Trivandrum', 'Chennai', 'Mumbai','Delhi'];
  // selectedCity: string = '';
  // state: string = '';
  // country: string = '';
  // error: string = '';
  key: string = '';

  // private apiUrl = 'http://api.geonames.org/searchJSON';
  // private username = 'poiuytrewq';

  // constructor(private http: HttpClient) {}

  // ngOnChanges(changes:SimpleChange):void{
  //   console.log("ngOnChanges is called...");
  // }

  // ngOnInit(): void {
  // }

  keyCapture(event:any){
    this.key = event;
  }

  // onCityChange(): void {
  //   if (this.selectedCity) {
  //     const params = new HttpParams()
  //       .set('q', this.selectedCity)
  //       .set('maxRows', '1')
  //       .set('username', this.username);

  //     this.http.get<any>(this.apiUrl, { params }).pipe(
  //       catchError(err => {
  //         this.error = 'Failed to fetch data';
  //         return of(null);
  //       })
  //     ).subscribe(response => {
  //       if (response && response.geonames.length > 0) {
  //         const geoname = response.geonames[0];
  //         this.state = geoname.adminName1 || 'N/A';
  //         this.country = geoname.countryName || 'N/A';
  //       } else {
  //         this.state = 'Not found';
  //         this.country = 'Not found';
  //       }
  //     });
  //   }
  // }

  // changeColor(color: string): void {
  //   this.selectedColor = color;
  // }
}