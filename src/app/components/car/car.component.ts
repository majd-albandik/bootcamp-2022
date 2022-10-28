import { Observable } from 'rxjs';
import { CarService } from '@/app/services/car.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Car } from '@/app/models/car.vo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  car$: Observable<Car[]>;



  constructor(private carService: CarService, private router: Router) {
    this.car$ = this.carService.getCars();
  }




  ngOnInit(): void {
    setTimeout(() => {
      this.car$ = this.carService.getCars();
    }, 500);
  }
}
