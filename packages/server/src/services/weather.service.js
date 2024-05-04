import weatherData from '../data/weather.data.js';

export default class WeatherService {
  getWeatherByCity(city) {
    return weatherData.find((weather) => weather.city === city);
  }
}