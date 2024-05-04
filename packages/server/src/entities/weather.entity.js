export class WeatherEntity {
  constructor({ city, name, overall, pressure, temperature, humidity }) {
    this.city = city;
    this.name = name;
    this.overall = overall;
    this.pressure = pressure;
    this.temperature = temperature;
    this.humidity = humidity;
  }

  getCity() {
    return this.city;
  }

  toString() {
    return `${this.city} - ${this.overall} - ${this.temperature}°C - ${this.humidity}% - ${this.pressure}hPa`;
  }
}