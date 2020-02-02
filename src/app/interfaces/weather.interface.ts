export interface WeatherInterface {
  list: Array<WeatherList>
}

interface WeatherList {
  dt: any;
  main: {
    [key: string]: number
  }
  weather: Array<Object>
  clouds: {all: number}
  wind: {
    [key: string]: number
  }
  snow: Object
}