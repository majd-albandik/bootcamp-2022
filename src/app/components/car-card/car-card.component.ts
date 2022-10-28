import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css'],
})
export class CarCardComponent implements OnInit {
  @Input() name?: string;
  @Input() model?: string;
  @Input() firstRegistration?: string;
  @Input() description?: string;

  @Input() cars?: Car;
  @Input() object: any;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {}

  RemoveCar() {
    setTimeout(() => {
      this.carService.deleteCar(this.object.id).subscribe((data) => {
        console.log(data);
      });
      window.location.reload();
    }, 1200);
  }

  toDetails() {
    this.carService.selectedCar = this.object;
    this.router.navigate(['cardetails'], {
      queryParams: { id: this.object.id },
    });
  }
}
