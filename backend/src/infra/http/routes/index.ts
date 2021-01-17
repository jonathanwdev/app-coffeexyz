import { Router } from 'express';
import AuthMiddleware from '../middleware/authMiddleware';
import AuthController from '../controllers/AuthController';
import ProductController from '../controllers/ProductController';
import TransactionController from '../controllers/TransactionController';

const routes = Router();

const authController = new AuthController();
const productController = new ProductController();
const transactionController = new TransactionController();

routes.post('/auth', authController.create);

routes.use(AuthMiddleware);
routes.get('/products', productController.index);
routes.post('/transaction', transactionController.create);

export default routes;
