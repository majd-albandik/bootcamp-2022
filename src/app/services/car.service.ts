import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, take } from 'rxjs';
import { Car } from '../models/car.vo';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {}

  public getCars(queryParams: any): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car`, {params: queryParams}).pipe(map(cars => cars));
  }

  public getCar(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${environment.baseApiUrl}/car/${id}`).pipe(map(car => car));
  }

  public deleteCar(id: number): Observable<void> {
    console.log(id)
    return this.httpClient.delete<void>(`${environment.baseApiUrl}/car/${id}`)
  }

  public addCar(car: Car): Observable<Car> {
    console.log(car)
    return this.httpClient.post<Car>(`${environment.baseApiUrl}/car`, car)
  }

}
