import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { Car } from '../models/car.vo';

const API_FILTER_URL: string = "http://localhost:3000/car/car?q=searchTerm";
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient) {}

  public getCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(`${environment.baseApiUrl}/car`);
  }
}

