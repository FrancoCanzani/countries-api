import express from 'express';
import fs from 'node:fs';

const app = express();

fs.readFile('src/data/countriesData.json', 'utf-8', (error, data) => {
  if (error) {
    throw error;
  }

  //   We always need to convert the readfile result to json as it comes as string
  const countries = JSON.parse(data);

  app.get('/countries', (req, res) => {
    res.send(countries);
  });
});

export default app;
