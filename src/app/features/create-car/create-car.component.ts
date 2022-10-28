import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateCarForm } from './CreateCarForm';
import { ICreateCarForm } from './createCarForm.interface';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css'],
})
export class CreateCarComponent implements OnInit {
  createCarForm: FormGroup<ICreateCarForm> = new CreateCarForm();

  get model(): FormControl {
    return this.createCarForm.get('model') as FormControl;
  }
  get firstRegistration(): FormControl {
    return this.createCarForm.get('firstRegistration') as FormControl;
  }
  get originField(): FormControl {
    return this.createCarForm.get('originField') as FormControl;
  }

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {}
  handleCarFormSubmit(): void {
    let newCar: Car = {
      firstRegistration: this.firstRegistration.value,
      model: this.model.value,
      origin: (this.originField.value as string).toUpperCase(),
    };

    this.carService.createNewCar$(newCar).subscribe((car: Car) => {
      this.router.navigate(['/cars', car.id]);
    });
  }
}
