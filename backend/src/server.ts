import express from 'express';
const app = express();
const port = 3333;


app.get('/', (req, res) => {
  return res.send('Working');
})


app.listen(port, () => console.log(`Working on ${port}`));