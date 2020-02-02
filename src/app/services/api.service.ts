import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { WeatherInterface } from '../interfaces/weather.interface'

@Injectable({
  providedIn: 'root'
})

export class WeatherAPI {
  labels: Array<String> = ['Мин. температура', 'Макс. температура', 'Давление на уровне моря', 'Давление', 'Влажность', 'Темп. коэффициент']
  params: any = ['temp_min', 'temp_max', 'sea_level', 'grnd_level', 'humidity', 'temp_kf']
  localeParams: Object = { year: 'numeric', month: 'short', day: 'numeric' }
  data: Array<String> = []
  datasets: Array<Object> = []

  constructor(private http: HttpClient) {}
  private apiURL = 'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/forecast?id=524901&appid=31c4de0a203be3d8d0f9a81abb238e85';


  getWeatherData() {
    return this.http.get<WeatherInterface>(this.apiURL);
  }

  convertTime(data) {
    data.list.forEach(item => item.dt = new Date(item.dt * 1000).toLocaleString('ru', this.localeParams));
  }

  createDatasets(data) {
    if (data) {
        for (let i = 0; i < this.labels.length; i++) {
          this.datasets.push({
            label: this.labels[i],
            data: data.map(v => v.main[this.params[i]]),
            fill: false,
            borderColor: `rgb(${this.genRandomInt()}, ${this.genRandomInt()}, ${this.genRandomInt()})`,
            borderWidth: 1
          })
        }

        return this.datasets
    }
  }

  genRandomInt() {
    return Math.floor(Math.random() * Math.floor(255));
  }
}