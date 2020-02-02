import { Component } from '@angular/core'
import { WeatherInterface } from '../../interfaces/weather.interface';
import { WeatherAPI } from '../../services/index'

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.pug',
  styleUrls: ['./weather.component.styl']
})

export class WeatherComponent {
  datasets: Array<Object>
  weatherData: WeatherInterface

  constructor(private ApiService: WeatherAPI) {
    this.getData()
  }
  
  getData() {
    this.ApiService.getWeatherData()
    .subscribe((data: WeatherInterface) => {
      this.ApiService.convertTime(data)
      this.weatherData = { ...data }
      this.getDatasets()
      });
  }

  getDatasets() {
    this.datasets = this.ApiService.createDatasets(this.weatherData.list)
  }
}
