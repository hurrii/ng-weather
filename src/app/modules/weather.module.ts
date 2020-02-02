import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CommonModule } from '@angular/common';
import { chartComponent } from '../components/chart/chart.component';
import { TableComponent } from '../components/table/table.component';
import { WeatherComponent } from '../components/weather/weather.component';

@NgModule({
  declarations: [
    chartComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  exports: [
    chartComponent,
    TableComponent,
    NgbModule
  ],
  bootstrap: [
    WeatherComponent
  ]
})

export class WeatherModule {}
