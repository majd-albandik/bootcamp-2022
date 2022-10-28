import { Car } from '@/app/models/car.vo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() car!: Car;
  @Output() handleDelete = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
}
