import { Component, OnInit,Input } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';

@Component({
  selector: 'app-new-car',
  templateUrl: './new-car.component.html',
  styleUrls: ['./new-car.component.css']
})
export class NewCarComponent implements OnInit {

  @Input() cars?: Car

carForm: FormGroup

  constructor(fb: FormBuilder, private carService: CarService) {
    this.carForm = fb.group({
      model: ['', [Validators.required]],
      firstRegistration: ['', [Validators.required]],
      origin: ['', [Validators.required]]

    })
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

  ngOnInit(): void {
  }

  onSubmit(car: Car) {

    console.log(car);
  }



}
