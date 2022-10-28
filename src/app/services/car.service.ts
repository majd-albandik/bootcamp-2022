import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../models/car.vo';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  selectedItem: Car | undefined;

  constructor(private httpClient: HttpClient) {}

  public getCars() {
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car`);
  }

  public getCarsByModel(model: string) {
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car?q=${model}`);
  }

  public RemoveCar(id: number) {
    return this.httpClient.delete(`${environment.baseApiUrl}/car/${id}`);
  }

  public AddCar(car: Car) {
    return this.httpClient.post(`${environment.baseApiUrl}/car`, car);
  }

  public UpdateCar(car: Car) {
    return this.httpClient.put(`${environment.baseApiUrl}/car/${car.id}`, car);
  }
}
