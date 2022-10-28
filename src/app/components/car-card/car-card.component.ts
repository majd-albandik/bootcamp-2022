import { Car } from '@/app/models/car.vo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car?: Car;

  constructor() { }

  ngOnInit(): void {
  }

}
