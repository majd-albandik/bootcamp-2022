import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CommonModule } from '@angular/common';
import { CarsComponent } from './components/cars/cars.component';
import { CarCardComponent } from './components/car-card/car-card.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, ExerciseComponent, CarsComponent, CarCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
