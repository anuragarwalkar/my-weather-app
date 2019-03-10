import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherDaysComponent } from './components/weather-days/weather-days.component';
import { DaysPipe } from './pipes/days.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WeatherDetailsComponent,
    WeatherComponent,
    WeatherDaysComponent,
    DaysPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
