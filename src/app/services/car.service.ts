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

  /* public getCars() {
    this.httpClient.get<any>(`${environment.baseApiUrl}/car`).pipe(take(1)).subscribe(data => console.log(data));
  } */

  public getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car`);
  }

}
