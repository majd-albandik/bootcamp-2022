import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.vo';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {}

  public getCars(searchFilter?: string): Observable<Car[]> {
    if (searchFilter) {
      return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car?q=${searchFilter}`);
    }
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car`);
  }

  public addCar(car: Car): Observable<Car> {
    return this.httpClient.post<Car>(`${environment.baseApiUrl}/car`, car);
  }

  public deleteCar (id: number): Observable<Car> {
    return this.httpClient.delete<any>(`${environment.baseApiUrl}/car/${id}`);
  }

}
