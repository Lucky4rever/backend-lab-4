import weatherRouter from './weather.route.js';
import { APP_ROUTES } from '../consts/routes.const.js';

export class AppRouter {
  constructor(app) {
    this.app = app;
  }

  init() {
    this.app.get('/', (_req, res) => {
      res.send('This is a Weather Page');
    });
    this.app.use(APP_ROUTES.WEATHER, weatherRouter);
  }
}