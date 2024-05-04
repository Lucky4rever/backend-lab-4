import express from 'express';
import bodyParser from 'body-parser';

import { AppRouter } from './routes/index.js';
import weatherController from './controllers/weather.controller.js';

const app = express();
const router = new AppRouter(app);

app.set('port', process.env.PORT || 4000);
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Дозволяє доступ з будь-якого домену
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.init();
app.get('/weather/:city', weatherController.getWeatherByCity.bind(weatherController));

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
