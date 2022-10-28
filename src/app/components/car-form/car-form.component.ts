import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css'],
})
export class CarFormComponent implements OnInit {
  carForm: FormGroup;

  constructor(fb: FormBuilder, private carService: CarService, private router: Router) {
    this.carForm = fb.group({
      model: ['', Validators.required],
      origin: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  get model(): FormControl {
    return this.carForm.get('model') as FormControl;
  }

  get origin(): FormControl {
    return this.carForm.get('origin') as FormControl;
  }

  onSubmit() {
    let newCar = {
      id: this.getRandomId(),
      model: this.model.value,
      firstRegistration: new Date().toString(),
      origin: this.origin.value,
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      carDetails: {
        kmPerGallon: 55,
        cylinders: 4,
        Displacement: 654,
        horsepower: 45645,
        weight: 542,
        acceleration: 3,
      },
    };
    if (this.carForm.valid) {
      console.log(newCar);

      this.carService.addCar(newCar);
      this.router.navigate(['/cars'])
    }
  }

  getRandomId(): number {
    return Math.random() * 1000;
  }
}
