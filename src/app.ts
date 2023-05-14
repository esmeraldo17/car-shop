import express from 'express';
import CarRouter from './Routers/Car.Routes';

const app = express();
app.use(express.json());
app.use(CarRouter);

export default app;
