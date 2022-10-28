import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {

  constructor(public carService: CarService) {
    
    this.carService.getCars().subscribe((cars: Car[])=> {
      this.carService.cars = cars as Car[];
      console.log('get cars method is working')
    })
   }

  ngOnInit():void{
    
  }

}
