import { ExerciseComponent } from '@/app/components/exercise/exercise.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsContainerComponent } from './components/cars-container/cars-container.component';
import { DetailsComponent } from './components/details/details.component';
import { AddCarComponent } from './components/add-car/add-car.component';

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
  { path: 'Cars', pathMatch: 'full', component: CarsContainerComponent },
  { path: 'details', component: DetailsComponent },
  { path: 'Add car', pathMatch: 'full', component: AddCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
