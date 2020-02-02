import { Component, NgModule } from '@angular/core';
import { WeatherComponent } from './components/weather/weather.component';


@NgModule({
  imports: [
    WeatherComponent
  ],
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  bootstrap: [ AppComponent ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.styl']
})

export class AppComponent {}
