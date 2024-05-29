import HomeComponent from "../components/home.component";
import WeatherComponent from "../components/weather.component";

const routes = {
  '/': {
    linkLabel: 'Weather Page',
    component: HomeComponent(),
  },
  '/vinnica': {
    linkLabel: 'Vinnica Page',
    component: WeatherComponent('vinnica'),
  },
  '/kyiv': {
    linkLabel: 'Kyiv Page',
    component: WeatherComponent('kyiv'),
  },
  '/kropyvnytskyi': {
    linkLabel: 'Kropyvnytskyi Page',
    component: WeatherComponent('kropyvnytskyi'),
  },
  '/donetsk': {
    linkLabel: 'Donetsk Page',
    component: WeatherComponent('donetsk'),
  },
  '/zhytomyr': {
    linkLabel: 'Zhytomyr Page',
    component: WeatherComponent('zhytomyr'),
  },
} as const;

type RouteKeys = keyof typeof routes;
type Route = (typeof routes)[RouteKeys];

function getRoute(route: RouteKeys) {
  return routes[route] as Route;
}

export { getRoute, type RouteKeys, type Route };