import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import connect from './database/connect.js';
import { data } from './data/post.data.js';
import { AppRouter } from './routes/index.js';
import postController from './controllers/post.controller.js';

const app = express();
const router = new AppRouter(app);

await connect();

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const corsOptions = {
  origin: 'http://localhost:3000',
};

app.use(cors(corsOptions));

router.init();

app.post('/test-load', async (req, res) => {
  try {
    const result = await Post.insertMany(data);

    res.send(`Тестові дані успішно завантажено. Кількість записів: ${result.length}`);
  } catch (error) {
    res.status(500).send('Помилка при завантаженні тестових даних: ' + error.message);
  }
});

app.get('/post/:id', async (req, res) => await postController.getPostById(req, res));
app.get('/posts', async (req, res) => await postController.getAllPosts(req, res));
app.get('/post/create', async (req, res) => await postController.createPost(req, res));
app.get('/post/update/:id', async (req, res) => await postController.updatePost(req, res));
app.get('/post/delete/:id', async (req, res) => await postController.deletePost(req, res));

const port = app.get('port');
// eslint-disable-next-line no-console
const server = app.listen(port, () => console.log(`Server started on port ${port}`));

export default server;
