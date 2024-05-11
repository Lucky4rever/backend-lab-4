import { Weather as WeatheType } from "../types/weather.type";

const Weather = (weather: WeatheType) => {
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

export default Weather;
