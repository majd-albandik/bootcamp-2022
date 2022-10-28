import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      model: ['', Validators.required],
      firstRegistration: ['', Validators.required],
      origin: ['', Validators.required],
    });
  }
  get model(): FormControl{
    return this.form.get('model') as FormControl
  }

  get origin(): FormControl{
    return this.form.get('origin') as FormControl
  }

  get firstRegistration(): FormControl{
    return this.form.get('firstregistration') as FormControl
  }
}
