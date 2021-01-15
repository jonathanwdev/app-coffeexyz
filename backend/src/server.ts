import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.send('Working');
});

app.listen(process.env.APP_PORT, () =>
  console.log(`Working on ${process.env.APP_PORT}`),
);
