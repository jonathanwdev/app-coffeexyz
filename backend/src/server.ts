import 'dotenv/config';
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import ErrorHandler from './Errors/ErrorHandler';
import routes from './infra/http/routes';
import './infra/typeorm';

const app = express();

app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof ErrorHandler) {
    return response.status(err.statuscode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.error(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(process.env.APP_PORT, () =>
  console.log(`Working on ${process.env.APP_PORT}`),
);
