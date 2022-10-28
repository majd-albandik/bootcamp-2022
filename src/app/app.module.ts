import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { CarsComponent } from './features/cars/cars.component';
import { CardComponent } from './features/cars/components/card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsContainerComponent } from './features/cars/components/cars-container/cars-container.component';
import { CarDetailsComponent } from './features/car-details/car-details.component';
import { CreateCarComponent } from './features/create-car/create-car.component';
import { DelayInterceptor } from './utils/delay.interceptor';
import { LogInterceptor } from './utils/log.interceptor';
import { LoadingComponent } from './components/loading/loading.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    ExerciseComponent,
    CarsComponent,
    CardComponent,
    CarsContainerComponent,
    CarDetailsComponent,
    CreateCarComponent,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DelayInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
