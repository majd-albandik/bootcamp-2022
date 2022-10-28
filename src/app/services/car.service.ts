import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Car } from '../models/car.vo';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {}

  public getCars() {
    this.httpClient.get<any>(`${environment.baseApiUrl}/car`).pipe(take(1)).subscribe(data => console.log(data));
  }

  public getAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car`);
  }

  public getOneCar(id: number): Observable<Car> {
    return this.httpClient.get<Car>(`${environment.baseApiUrl}/car/${id}`);
  }

  public addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${environment.baseApiUrl}/car`, car);
  }

  public removeOneCar(car: Car): Observable<Car> {
    return this.httpClient.delete<Car>(`${environment.baseApiUrl}/car/${car.id}`);
  }

}
