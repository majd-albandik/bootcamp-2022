import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Car } from '../models/car.vo';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private httpClient: HttpClient) {}

  selectedCar: Car | undefined;

  // public getCars() {
  //   this.httpClient.get<Car>(`${environment.apiUrl}/car`).pipe(take(1)).subscribe(data => console.log(data));
  // }

  public getCars() {
    return this.httpClient.get<Car[]>(`${environment.apiUrl}/car`);
  }

  public getCarModel(model: string) {
    return this.httpClient.get<Car[]>(`${environment.apiUrl}/car?q=${model}`);
  }

  public AddNewCar(car: Car) {
    return this.httpClient.post(`${environment.apiUrl}/car`, car);
  }

  public editCar(car: Car) {
    return this.httpClient.put(`${environment.apiUrl}/car/${car.id}`, car);
  }

  public deleteCar(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}/car/${id}`);
  }
}
