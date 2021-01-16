import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const routes = Router();

const authController = new AuthController();

routes.post('/auth', authController.auth);

export default routes;
