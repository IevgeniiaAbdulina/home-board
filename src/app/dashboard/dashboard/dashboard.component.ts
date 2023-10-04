import { Component, Input, OnInit } from '@angular/core';
import { ForecastService } from '../weather/forecast.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  forecastToday!: number;

  constructor(private forecastService: ForecastService) {}

  ngOnInit(): void {
    this.forecastService.getForecust().subscribe(value => {
      this.forecastToday = value[0].temp;
    })
  }

}
