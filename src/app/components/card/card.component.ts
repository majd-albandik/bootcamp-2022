import { CarService } from '@/app/services/car.service';
import { Component, OnInit } from '@angular/core';

import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  noImage: boolean = false;

  @Input() image_url?: string;
  @Input() title?: string;
  @Input() description?: string;
  @Input() object: any;

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    if (this.image_url === undefined) {
      this.noImage = true;
    }
  }

  RemoveItem() {
    setTimeout(() => {
      this.carService.RemoveCar(this.object.id).subscribe((data) => { console.log(data);
       });
      window.location.reload();
    }, 500);
  }

  navigateToDetails() {
    this.carService.selectedItem = this.object;

    this.router.navigate(['details'], {
      queryParams: { id: this.object.id },
    });
  }
}
