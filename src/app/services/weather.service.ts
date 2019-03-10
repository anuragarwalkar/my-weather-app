import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  // url:string
  // defaultLocation:string ='2295412'

  private WeatherLocation = new BehaviorSubject<number>(2295412);
  currentLocation = this.WeatherLocation.asObservable();


  changeLocation(location:number){
    this.WeatherLocation.next(location)
    // this.defaultLocation = location
  }

  constructor(private http:HttpClient) {

   }

  searchQuery(value:string):Observable<any>{
    const url = `/api/location/search/?query=${value}`
    return this.http.get(url);
  } 

  getLocationWeatherDetail(location:number):Observable<any>{
    const url = `/api/location/${location}/`;
    return this.http.get(url);

  }


}
