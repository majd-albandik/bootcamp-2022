import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CarComponent } from './components/car/car.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { CarService } from './services/car.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CarDetailsComponent } from './components/car-details/car-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ExerciseComponent,
    CarComponent,
    CarCardComponent,
    NewCarComponent,
    CarDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule {}
