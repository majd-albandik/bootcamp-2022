import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BehaviorSubject, Subscription, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit, OnDestroy {

  public inputValue: string = ''
  cars: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([])
  subs?: Subscription
  isLoading: boolean = false;

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.subs = this.route.queryParams.pipe(
      switchMap((params: Params) => {
        return this.carService.getCars(params)
      }),
      tap(cars =>{
        this.isLoading = true;
        setTimeout(() => {
          this.cars.next(cars);
          this.isLoading = false;
        }, 500) 
      } 
        )
    ).subscribe()
  }

  public getFilteredCars(): void {
    this.router.navigate(['/cars'], {queryParams: {'q': this.inputValue}})
    console.log(this.cars.getValue())

  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe()
  }
}
