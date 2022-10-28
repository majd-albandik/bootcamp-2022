import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit, OnDestroy {
  searchbar = new FormControl('', { validators: [Validators.required], nonNullable: true });
  cars$: Observable<Car[]>;
  filterSub: Subscription;
  constructor(private carService: CarService) {
    this.cars$ = this.carService.getCarsByFilter$(this.searchbar.value);
    this.filterSub = this.searchbar.valueChanges.pipe(throttleTime(100)).subscribe((value: string) => {
      this.cars$ = this.carService.getCarsByFilter$(value);
    });
  }
  ngOnDestroy(): void {
    this.filterSub.unsubscribe();
  }

  ngOnInit(): void {}
  onDeleteCar(id: number): void {
    this.carService.deleteCar$(id).subscribe(() => {
      this.cars$ = this.carService.getCarsByFilter$(this.searchbar.value);
    });
  }
}
