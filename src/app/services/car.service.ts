
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Car } from '../models/car.vo';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  cars: Car[] = [];
  selectedCar?: Car;
  query: any;
  id!:number;

  constructor(private httpClient: HttpClient) {}

  public getCars(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car`);
  }

  public getCarsById(){
    return this.httpClient.get<Car>(`${environment.baseApiUrl}/car` + this.id)
  }

  public deleteCarByID(){
    return this.httpClient.delete<Car>(`${environment.baseApiUrl}/car` + this.id);
  }

  public deleteAllCars(){
    this.httpClient.delete<Car[]>(`${environment.baseApiUrl}/car`)
  }

  public postCar(){
    this.httpClient.post<Car[]>(`${environment.baseApiUrl}/car`, this.cars)
  }

}
