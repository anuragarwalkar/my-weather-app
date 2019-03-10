import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Query } from 'src/app/models/query';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  queryValue:string;
  queryResults:Query[];

  constructor(private weatherService:WeatherService) { }

  onLocationSet(queryResult:Query){
      this.weatherService.changeLocation(queryResult.woeid);
        this.queryValue = ''

  }

  onSearch(){
    if(this.queryValue == ''){
      this.queryResults = []
      console.log('working')
    }else{
      this.weatherService.searchQuery(this.queryValue).subscribe((res)=>{
        this.queryResults = res 
        // console.log(res)
      })
    }
   
        
  }

  ngOnInit() {
  //   navigator.geolocation.getCurrentPosition(position=>{
  //     this.location = position
  //     this.url = `https://www.metaweather.com/api/location/search/?lattlong=${this.location.coords.latitude},${this.location.coords.longitude}`
  // })
  }

}
