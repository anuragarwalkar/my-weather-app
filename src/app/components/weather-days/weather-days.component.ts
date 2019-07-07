import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Weather } from 'src/app/models/weather';

@Component({
  selector: 'app-weather-days',
  templateUrl: './weather-days.component.html',
  styleUrls: ['./weather-days.component.css']
})
export class WeatherDaysComponent implements OnInit {

  weatherDetails:Weather

  constructor(private weatherService:WeatherService) { }

  

  ngOnInit() {

    this.weatherService.currentLocation.subscribe((location)=>{
      this.weatherDetails = null;
      this.weatherService.getLocationWeatherDetail(location).subscribe((res)=>{
        this.weatherDetails = res.consolidated_weather
        // console.log(this.weatherDetails)
    })
    })

    

    
  }

}
