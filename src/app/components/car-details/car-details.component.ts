import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  carId!: number;
  car!: Car;
  constructor(private activatedRoute: ActivatedRoute, private carService: CarService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.carId = data['id'];
    });
    this.carService.getCarDetails(this.carId).subscribe((carData) => {
      this.car = carData;
    });
  }
}
