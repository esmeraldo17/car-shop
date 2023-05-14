import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());

export default router;