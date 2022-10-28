import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { catchError, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css'],
})
export class CarDetailsComponent implements OnInit {
  car$: Observable<Car>;
  constructor(private route: ActivatedRoute, private carService: CarService, private router: Router) {
    this.car$ = this.route.params.pipe(
      switchMap((params: Params) => {
        return this.carService.getCar$(params['id']);
      }),
      catchError((err) => {
        this.router.navigate(['/cars']);
        throw err;
      })
    );
  }

  ngOnInit(): void {}

  onDeleteCar(id: number): void {
    this.carService.deleteCar$(id).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }
}
