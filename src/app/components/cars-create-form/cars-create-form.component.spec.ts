import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsCreateFormComponent } from './cars-create-form.component';

describe('CarsCreateFormComponent', () => {
  let component: CarsCreateFormComponent;
  let fixture: ComponentFixture<CarsCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
