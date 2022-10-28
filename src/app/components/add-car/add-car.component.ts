import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { environment } from '@/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  form: FormGroup;
  
  newCar = {
    id: 1,
    model: "",
    firstRegistration: "",
    origin: "GERMANY",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
   
  }

  constructor(public carService: CarService, private router: Router, private fb: FormBuilder, private http: HttpClient){
    this.form = fb.group({
      model: ['', Validators.required],
      firstRegistration: ['', Validators.required],
      origin: ['', Validators.required],
      description: ['', Validators.required],
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

  get description(): FormControl{
    return this.form.get('description') as FormControl
  }

  ngOnInit(): void {
  }

  onSubmit(){
    // this.carService.postCar().subscribe(()=>{
      // this.router.navigate(['cars']);
    // })

    this.http.post<Car[]>(`${environment.baseApiUrl}/car`, this.newCar)
    .subscribe(()=>{
      this.router.navigate(['cars']);
      console.log('subscribe is working')
    })
  }



}
