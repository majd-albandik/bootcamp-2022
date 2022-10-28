import { CarService } from '@/app/services/car.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from '@/app/models/car.vo';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.component.html',
  styleUrls: ['./cars-form.component.css']
})
export class CarsFormComponent implements OnInit {


  carsearch: FormGroup;
  searchword: string = '';
  carsNumber?: number;
  @Output() searchTerm = new EventEmitter<string>();


  constructor(fb: FormBuilder, private carService: CarService) {
    this.carsearch = fb.group({
      search :['', [Validators.minLength(3), Validators.required]]
    });

    /* this.carsNumber = this.carService.getNumberOfCars(); */
  }

  get search(): FormControl {
    return this.carsearch?.get('search') as FormControl

  }

  ngOnInit(): void {
  }

  onSearch() {
    this.searchTerm.emit(this.searchword)
  }



}
