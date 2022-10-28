import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars$: Observable<Car[]>;
  inputValue: string = ""

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute) {
    this.cars$ = this.carService.getCars();
  }

  ngOnInit(): void {}

  onSearchInputChanged() {
    this.cars$ = this.carService.getCars(this.inputValue)
  }
}
