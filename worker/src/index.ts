import express from 'express';

const app: express.Express = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log(req, res);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
