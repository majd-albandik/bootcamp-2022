import { Observable } from 'rxjs';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from '@/app/models/car.vo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  searchForm: FormGroup;

  public cars$: Observable<Car[]> = this.carService.getAllCars();

  constructor(fb: FormBuilder, private carService: CarService) {
    this.searchForm = fb.group({
      searchField: ['', [Validators.minLength(3), Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSearch(value: string): void {
    if(this.searchForm.valid) {

    }
  }

}
