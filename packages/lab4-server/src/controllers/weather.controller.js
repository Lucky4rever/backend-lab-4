import WeatherService from '../services/weather.service.js';

export class WeatherController {
  constructor(weatherService) {
    this.weatherService = weatherService;
  }

  getWeatherByCity(req, res) {
    const city = req.params.city;

    try {
      const result = this.weatherService.getWeatherByCity(city);
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  getWeatherByCityQuery(req, res) {
    const city = req.query.city;

    try {
      const result = this.weatherService.getWeatherByCity(city);
      res.send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

const weatherController = new WeatherController(new WeatherService());
export default weatherController;