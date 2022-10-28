import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  constructor(public carService: CarService, private router: Router) {}

  ngOnInit(): void {}
  deleteItem() {
    setTimeout(() => {
      this.carService.RemoveCar(this.carService.selectedItem!.id!).subscribe((data) => {console.log(data);});
      this.router.navigate(['Cars']);
    }, 500);
  }
}
