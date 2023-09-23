import express from 'express';
import router from './router.js';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to the root of the application.');
});

app.use('/api', router);

export default app;
