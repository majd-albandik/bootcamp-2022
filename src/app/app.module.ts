import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CarsContainerComponent } from './components/cars-container/cars-container.component';
import { CardComponent } from './components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './components/details/details.component';
import { AddCarComponent } from './components/add-car/add-car.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, ExerciseComponent, CarsContainerComponent, CardComponent, DetailsComponent, AddCarComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
