import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherDaysComponent } from './components/weather-days/weather-days.component';

const routes: Routes = [
  {path:'', component:WeatherDetailsComponent},
  {path:'weather-forcast', component:WeatherDaysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
