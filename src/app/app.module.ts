import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { CarsCardComponent } from './components/cars-card/cars-card.component';
import { AddCarsPageComponent } from './components/add-cars-page/add-cars-page.component';
import { CarsFormComponent } from './components/cars-form/cars-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsCreateFormComponent } from './components/cars-create-form/cars-create-form.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, WelcomeComponent, ExerciseComponent, CarsPageComponent, CarsCardComponent, AddCarsPageComponent, CarsFormComponent, CarsCreateFormComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
