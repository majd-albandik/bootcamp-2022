import { ExerciseComponent } from '@/app/components/exercise/exercise.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsPageComponent } from './components/cars-page/cars-page.component';
import { AddCarComponent } from './components/add-car/add-car.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {
    path: 'welcome',
    pathMatch: 'full',
    component: WelcomeComponent,
  },
  {
    path: 'exercise',
    pathMatch: 'full',
    component: ExerciseComponent,
  },
  {
    path: 'cars',
    pathMatch: 'full',
    component: CarsPageComponent,
  },
  {
    path: 'add-car',
    pathMatch: 'full',
    component: AddCarComponent,
  },
  {
    path: 'details',
    pathMatch: 'full',
    component: CarDetailsComponent,
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
