import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {

  @Input() currentCar?: Car;

  constructor(private carService: CarService,) { }

  ngOnInit(): void {
  }

  onDeleteCar(car: Car | undefined): void {
    if(car)
    this.carService.removeOneCar(car).subscribe(
      car => location.reload(),
      err => console.error(err)
    );
  }

}
