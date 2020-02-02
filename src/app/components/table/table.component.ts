import { Component, Input } from '@angular/core';
import { WeatherInterface } from 'src/app/interfaces/weather.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.pug',
  styleUrls: ['./table.component.styl']
})

export class TableComponent {

  @Input() weather: WeatherInterface
}
