import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {
  addCarForm: FormGroup;

  constructor(fb: FormBuilder, private carService: CarService, private router: Router) {
    this.addCarForm = fb.group({
      model: ['', [Validators.required]],
      firstRegistration: ['', [Validators.required]],
      origin: ['', [Validators.required, Validators.pattern('^[A-Z]{3,}$')]],
    });
  }

  get modelControl(): FormControl {
    return this.addCarForm.get('model') as FormControl;
  }

  get firstRegistrationControl(): FormControl {
    return this.addCarForm.get('firstRegistration') as FormControl;
  }

  get originControl(): FormControl {
    return this.addCarForm.get('origin') as FormControl;
  }

  ngOnInit(): void {}

  addCar() {
    const car = {
      model: this.addCarForm.value.model,
      firstRegistration: this.addCarForm.value.firstRegistration,
      origin: this.addCarForm.value.origin,

      description: 'This is a car with dummy data, further details may be incorrect',
      carDetails: {
        kmPerGallon: 10,
        cylinders: 10,
        Displacement: 10,
        horsepower: 10,
        weight: 10,
        acceleration: 10,
      },
    };
    setTimeout(() => {
      this.carService.AddCar(car).subscribe((data) => {
        console.log(data);
        this.router.navigate(['Cars']);
      });
    }, 500);
  }
}
