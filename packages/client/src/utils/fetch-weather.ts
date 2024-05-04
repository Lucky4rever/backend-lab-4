import { convertToIcon } from "../types/icon.type";
import { Weather } from "../types/weather.type";
import getIcon from "./get-icon";

const apiLink = 'http://localhost:4000/weather';

async function fetchWeather(city: string): Promise<Weather> {
  const response = await fetch(`${apiLink}?city=${city.substring(1)}`);
  const data = await response.json();
  return ({
    city: data.name,
    overall: data.overall,
    iconType: convertToIcon(data.overall),
    icon: getIcon(convertToIcon(data.overall)),
    pressure: data.pressure,
    temperature: data.temperature,
    humidity: data.humidity,
  });
}

export default fetchWeather;
