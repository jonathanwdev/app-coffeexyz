import { Router } from 'express';
import AuthMiddleware from '../middleware/authMiddleware';
import AuthController from '../controllers/AuthController';
import ProductController from '../controllers/ProductController';

const routes = Router();

const authController = new AuthController();
const productController = new ProductController();

routes.post('/auth', authController.create);

routes.use(AuthMiddleware);
routes.get('/products', productController.index);

export default routes;
