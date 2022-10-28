import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Car } from '../models/car.vo';
import { CarService } from './car.service';

describe('DummyService', () => {
  let service: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(CarService);
  });

  it('should add an image to a car object', () => {
    let car: Car = {
      id: 1,
      firstRegistration: '02/02/1998',
      model: 'mazda',
      origin: 'JAPAN',
    };
    service.addImageToCar(car);
    expect(car.image).toBeTruthy();
  });
});
