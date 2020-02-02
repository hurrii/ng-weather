import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherModule } from './modules/weather.module';
import { WeatherComponent } from './components/weather/weather.component'

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    WeatherModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
