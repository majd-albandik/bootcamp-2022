import { CarService } from '@/app/services/car.service';
import { Car } from '@/app/models/car.vo';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  currentCar!: Car;
  currentId!: number;

  constructor(private router: Router, private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => this.currentId = params['id'])).subscribe(
        () => {
            this.carService.getOneCar(Number(this.currentId)).subscribe(
              (result) => this.currentCar = result
            )
        }
      );
  }

}
