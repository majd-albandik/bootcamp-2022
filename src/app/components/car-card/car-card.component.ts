import { Car } from '@/app/models/car.vo';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent implements OnInit {
  @Input() car?: Car;
  images: string[] = [
    '../../../assets/car-dummy-0.jpg',
    '../../../assets/car-dummy-1.jpg',
    '../../../assets/car-dummy-2.jpg',
  ];

  constructor() {}

  ngOnInit(): void {}

  getRandomPhotoUrl(): string {
    return this.images[Math.floor(Math.random() * this.images.length)];
  }
}
