import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.css'],
})
export class CarsContainerComponent implements OnInit, OnDestroy {
  searchbarform: FormGroup;

  cars$?: Observable<Car[]>;

  constructor(fb: FormBuilder, public carService: CarService) {
    this.searchbarform = fb.group({
      search: [''],
    });

    this.searchbarform.valueChanges.subscribe((value) => {
      this.cars$ = this.carService.getCarsByModel(value.search);
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.cars$ = this.carService.getCars();
    }, 500);

  }
  //On Destory is implemented due to me thinking I have to unsubscribe from it, it seems that I do not but I'll leave it here in case I do somehow. And just to show that I did think about it.
  ngOnDestroy(): void {}
}
