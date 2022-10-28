import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCarsPageComponent } from './add-cars-page.component';

describe('AddCarsPageComponent', () => {
  let component: AddCarsPageComponent;
  let fixture: ComponentFixture<AddCarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCarsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
