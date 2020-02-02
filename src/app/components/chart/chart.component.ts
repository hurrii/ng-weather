import { Component, Input } from '@angular/core';
import { WeatherInterface } from '../../interfaces/weather.interface';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.pug',
  styleUrls: ['./chart.component.styl']
})

export class chartComponent {
  canvas: any;
  ctx: any;

  @Input() weather: WeatherInterface
  @Input() datasets: any

  ngOnChanges() {
    if (this.weather) this.chart()
  }

  chart() {

    this.canvas = document.getElementById('weatherChart');
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      fill: false,
      data: {
        labels: this.weather.list.map(item => item.dt),
        datasets: this.datasets
      },
      options: {
        responsive: false,
        display: true
      }
    })
  }

}
