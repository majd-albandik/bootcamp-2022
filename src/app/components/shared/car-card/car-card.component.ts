import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car?: Car
  imgSource: string = ''

  constructor(public carService: CarService, private router: Router) { }

  ngOnInit(): void {
    let imgNumber = Math.floor(Math.random() * 3)
    this.imgSource = `assets/car-dummy-${imgNumber}.jpg`
  }

  public navigateToDetails(id: number): void {
    this.router.navigate([`cars/${id}`])
  }

}
