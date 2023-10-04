import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { filter, map, mergeMap, share, switchMap, toArray } from 'rxjs/operators';

interface OpenWeatherResponse {
  list: {
    dt_txt: string;
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
    };
    weather: [{
        main: string;
        description: string;
        icon: string;
    }]
  }[]
}

@Injectable({
  providedIn: 'root'
})
export class ForecastService {
  private Api_Url = 'https://api.openweathermap.org/data/2.5/forecast';
  private Api_Key = 'ea0bbc74362141bcef9e2e20bff7ec0f';

  constructor(private http: HttpClient) { }

  /***
   * [GET] Forecust
   *
   * latitude
   * longitude
   */
  getForecust() {
    return this.getCurrentLocation().pipe(
      map((coords) => {
        return new HttpParams()
          .set('lat', coords.latitude)
          .set('lon', coords.latitude)
          .set('appid', this.Api_Key)
          .set('units', 'metric')
          .set('lang', 'en')
      }),
      switchMap((params) => this.http.get<OpenWeatherResponse>(this.Api_Url, { params })),
      map((value) => value.list),
      mergeMap((value) => of(...value)),
      filter((_value, index) => index % 8 === 0),
      map((value) => {
        return {
          dateString: value.dt_txt,
          temp: value.main.temp,
          feels_like: value.main.feels_like,
          pressure: value.main.pressure,
          humidity: value.main.humidity,
          weather_main: value.weather[0].main,
          icon: value.weather[0].icon,
        }
      }),
      toArray(),
      share()
    )
  }

  /***
   * [GET] Current Location
   *
   */
  getCurrentLocation() {
    return new Observable<GeolocationCoordinates>((observer) => {
      window.navigator.geolocation.getCurrentPosition((position) => {
        observer.next(position.coords);
        observer.complete();
      },
      (err) => observer.error(err)
      )
    })
  }
}
