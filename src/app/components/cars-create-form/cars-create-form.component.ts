import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cars-create-form',
  templateUrl: './cars-create-form.component.html',
  styleUrls: ['./cars-create-form.component.css']
})
export class CarsCreateFormComponent implements OnInit {


  addCarForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.addCarForm = fb.group({
      model: ['', Validators.required],
      firstRegistration: ['', [Validators.pattern(/(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).([19]{2})?([1-9]{2})$/)]],
      origin: ['', [Validators.pattern(/^[A-Z]+$/), Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.addCarForm.controls);
  }

}
