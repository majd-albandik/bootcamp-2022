import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take, BehaviorSubject, map } from 'rxjs';
import { Car } from '../models/car.vo';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars$: BehaviorSubject<Car[]> = new BehaviorSubject<Car[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getCars(): Observable<Car[]>  {
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car`).pipe(
      map((cars: Car[]) => {
        return cars.map((car: Car) => {
          let carsObject = {...car};
          return carsObject
        })
      })
    )
  };

  getNumberOfCars(): any {
    return this.cars$.subscribe(result =>  result.length)
  }



}
