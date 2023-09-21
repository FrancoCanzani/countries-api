import express from 'express';
import router from './router.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the root of the application.');
});

app.use('/api', router);

export default app;
