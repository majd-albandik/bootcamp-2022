import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, map, Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit, OnDestroy {

  car?: Car
  subs?: Subscription

  constructor(private carService: CarService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    this.subs = this.carService.getCar(id).subscribe(car => this.car = car)
  }
  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }



}
