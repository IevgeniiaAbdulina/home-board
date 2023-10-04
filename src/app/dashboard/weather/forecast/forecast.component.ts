import { Component, OnInit, Output } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { Observable, Subject } from 'rxjs';

export interface ForecastData {
  dateString: string;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  weather_main: string;
  icon: string;
}

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  forecast$: Observable<ForecastData[]>;

  constructor(private forecastService: ForecastService) {
    this.forecast$ = this.forecastService.getForecust();
  }

  ngOnInit(): void {}

}
