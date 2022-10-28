import { Car } from '@/app/models/car.vo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.css'],
})
export class CarsContainerComponent implements OnInit {
  @Input() cars: Car[] = [];
  @Output() handleCarDelete = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
}
