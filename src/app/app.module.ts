import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, ExerciseComponent, CarsComponent, CarCardComponent, CarDetailsComponent,],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
