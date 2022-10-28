import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor( private router: Router, public carService: CarService) { }

  ngOnInit(): void {
    // deleteCar() {
    //   setTimeout(() => {
    //     this.carService.deleteCar(this.carService.selectedCar!.id!).subscribe((data) => {console.log(data);});
    //     this.router.navigate(['cars']);
    //   }, 1200);
    // }

  }

}
