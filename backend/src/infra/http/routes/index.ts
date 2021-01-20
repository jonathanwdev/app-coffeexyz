import { Router } from 'express';
import { Segments, celebrate, Joi } from 'celebrate';
import AuthMiddleware from '../middleware/authMiddleware';
import AuthController from '../controllers/AuthController';
import ProductController from '../controllers/ProductController';
import TransactionController from '../controllers/TransactionController';

const routes = Router();

const authController = new AuthController();
const productController = new ProductController();
const transactionController = new TransactionController();

routes.post(
  '/auth',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  }),
  authController.create,
);

routes.use(AuthMiddleware);
routes.get('/products', productController.index);
routes.post(
  '/transaction',
  celebrate({
    [Segments.BODY]: {
      user_name: Joi.string().required(),
      user_email: Joi.string().required(),
      address: Joi.string().required(),
      country: Joi.string().required(),
      state: Joi.string().required(),
      cep_number: Joi.string().required(),
      card_type: Joi.string().required(),
      card_name: Joi.string().required(),
      card_number: Joi.string().required(),
      card_expiresIn: Joi.string().required(),
      card_cvv: Joi.number().required(),
      total_price: Joi.string().required(),
      transaction_list: Joi.array().required(),
    },
  }),
  transactionController.create,
);
routes.get('/transaction', transactionController.index);

export default routes;
