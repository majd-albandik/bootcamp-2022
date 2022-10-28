import { Component, OnInit, Input } from '@angular/core';
import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';

@Component({
  selector: 'app-cars-card',
  templateUrl: './cars-card.component.html',
  styleUrls: ['./cars-card.component.css']
})
export class CarsCardComponent implements OnInit {

  @Input() car?: Car;

  constructor(public carService: CarService) { }

  ngOnInit(): void {
    
  }

}
