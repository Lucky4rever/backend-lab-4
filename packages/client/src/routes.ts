const routes = {
  '/': {
    linkLabel: 'Weather Page',
    content: `This is a Weather Page`
  },
  '/vinnica': {
    linkLabel: 'Vinnica Page',
    content: `Vinnica Page`
  },
  '/kyiv': {
    linkLabel: 'Kyiv Page',
    content: `Kyiv Page`
  },
  '/kropyvnytskyi': {
    linkLabel: 'Kropyvnytskyi Page',
    content: `Kropyvnytskyi Page`
  },
  '/donetsk': {
    linkLabel: 'Donetsk Page',
    content: `Donetsk Page`
  },
  '/zhytomyr': {
    linkLabel: 'Zhytomyr Page',
    content: `Zhytomyr Page`
  },
} as const;

type RouteKeys = keyof typeof routes;
type Route = (typeof routes)[RouteKeys];


function getRoute(route: RouteKeys) {
  return routes[route] as Route;
}

export { getRoute, type RouteKeys, type Route };