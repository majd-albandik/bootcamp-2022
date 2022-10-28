import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CarsComponent } from './pages/cars/cars.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarCardComponent } from './components/shared/car-card/car-card.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';
import { AddCarComponent } from './pages/add-car/add-car.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, ExerciseComponent, CarsComponent, CarCardComponent, CarDetailsComponent, AddCarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
