import { Router } from '@angular/router';
import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input() car: string = '';
  @Input() model: string = '';
  @Input() firstRegistration: string = '';

  constructor(public carService: CarService, private router: Router) { }

  ngOnInit(): void {
  }

  deleteCar() {
    this.carService.deleteCarByID().subscribe(() => console.log('delete one car'));
  }

  // details(car: Car){
  //   this.router.navigate(['/details', {id: car.id}])
  //   this.carService.selectedCar = car;
  // }

}
