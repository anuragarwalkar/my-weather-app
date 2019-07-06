import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

   weatherDetails:{} 

  constructor( private weatherSevice:WeatherService) { }

  ngOnInit() {

    

    this.weatherSevice.currentLocation.subscribe((location)=>{
      // console.log(location)
      this.weatherSevice.getLocationWeatherDetail(location).subscribe((res)=>{
        this.weatherDetails = res
        // console.log(this.weatherDetails)
      })

    })
      
  }

}
