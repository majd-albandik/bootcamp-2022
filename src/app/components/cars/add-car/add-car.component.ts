import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  carForm: FormGroup;
  car?: Car;

  constructor(fb: FormBuilder, private carService: CarService, private router: Router) {
    this.carForm = fb.group({
      id: [Number],
      model: ['', [Validators.required]],
      firstRegistration: ['', [Validators.required, Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)]],
      origin: ['', [Validators.required]],
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

  onSaveCar(): void {
    console.log('savedcar', this.carForm.value);
    const newCar = this.carForm.value as Car;

    this.carService.addCar(newCar).subscribe(
      newCar => this.router.navigate(['/cars']),
      err => console.error(err)
    );
  }

}
