import { Weather as WeatherType } from "../types/weather.type";
import fetchWeather from "../utils/fetch-weather";

const WeatherComponent = async (city: string) => {
  const weather: WeatherType = await fetchWeather(city);

  return `
    <div class="container">
      <h1>Weather App KPI</h1>
      <div class="box">
        <h2>${weather.city}</h2>
        <img src="${weather.icon}" alt="${weather.iconType}" />
        <p>${weather.overall}</p>
        <p>Температура: ${weather.temperature}°C</p>
        <p>Вологість: ${weather.humidity}%</p>
        <p>Тиск: ${weather.pressure} hPa</p>
        <button><a href="/">Back to Home</a></button>
      </div>
    </div>
  `;
};

export default WeatherComponent;
