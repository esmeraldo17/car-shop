import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).create());
router.get('/motorcycles', (req, res, next) => new MotorcycleController(req, res, next).findAll());
router.get('/motorcycles/:id', (req, res, next) => new MotorcycleController(req, res, next)
  .findById());

export default router;