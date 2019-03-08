import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDaysComponent } from './components/weather-days/weather-days.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WeatherDetailsComponent,
    WeatherComponent,
    WeatherDaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
