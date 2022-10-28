import { Car } from '@/app/models/car.vo';
import { CarService } from '@/app/services/car.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {

  @Input() car?: Car;
  imgSource: string = '';
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>() 

  constructor(public carService: CarService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let imgNumber = Math.floor(Math.random() * 3)
    this.imgSource = `assets/car-dummy-${imgNumber}.jpg`
  }

  public navigateToDetails(id: number): void {
    this.router.navigate([`cars/${id}`])
  }

  public deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(data => {
      console.log(data);
      this.deleteEvent.emit()
      
    })
  }

}
