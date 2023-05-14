import express from 'express';
import CarRoutes from './Routers/Car.Routes';
import MotorcycleRoutes from './Routers/Moto.Routes';

const app = express();
app.use(express.json());
app.use(CarRoutes);
app.use(MotorcycleRoutes);

export default app;
