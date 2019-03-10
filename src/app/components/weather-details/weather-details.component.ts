import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  weatherDetails:Weather
  weatherStates:string
 
  
  constructor(private weatherService:WeatherService) { }


  ngOnInit() {
    this.weatherService.currentLocation.subscribe((location)=>{
      this.weatherService.getLocationWeatherDetail(location).subscribe((res)=>{
        this.weatherDetails = res.consolidated_weather[0]
        this.weatherStates = `https://www.metaweather.com/static/img/weather/${this.weatherDetails.weather_state_abbr}.svg`
        // console.log(this.weatherDetails)
      })
    })
    
  }

}
