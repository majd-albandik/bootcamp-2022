import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {


  carNumb: number = 0;

  constructor(public carService: CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe((cars) => {
      this.carService.cars$.next(cars)
      console.log(cars)
    })

    this.carService.getCars().subscribe((cars) => {
      this.carService.cars$.next(cars)
      cars.length = this.carNumb
    })
  }


}
