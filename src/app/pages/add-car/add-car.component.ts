import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup

  constructor(fb: FormBuilder, private carsService: CarService, private router: Router) {
    this.carForm = fb.group({
      model: ['', Validators.required],
      firstRegistration: ['', Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)],
      origin: ['', ]
    })
   }

  ngOnInit(): void {
  }

  get model(): FormControl {
    return this.carForm.get('model') as FormControl;
  }
  get firstRegistration(): FormControl {
    return this.carForm.get('firstRegistration') as FormControl;
  }
  get origin(): FormControl {
    return this.carForm.get('origin') as FormControl;
  }

  onSave(): void {
    if(this.carForm.valid) {
      let car: Car = this.carForm.value
      this.carsService.addCar(car)
      this.router.navigate(['/cars'])
    }
  }



}
