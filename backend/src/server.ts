import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';

import './infra/typeorm';

const app = express();

app.get('/', (req, res) => {
  return res.send('Working');
});

app.listen(process.env.APP_PORT, () =>
  console.log(`Working on ${process.env.APP_PORT}`),
);
