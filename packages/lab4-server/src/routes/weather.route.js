import { Router } from 'express';

import weatherController from '../controllers/weather.controller.js';

const weatherRouter = Router();

weatherRouter.get('/weather/:city', weatherController.getWeatherByCity.bind(weatherController));
weatherRouter.get('/', weatherController.getWeatherByCityQuery.bind(weatherController));

export default weatherRouter;
