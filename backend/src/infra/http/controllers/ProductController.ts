import { Request, Response } from 'express';
import ProductService from '../../../services/ProductService';
import ProductRepository from '../../typeorm/repositories/ProductRepository';

class ProductController {
  public async index(req: Request, res: Response): Promise<Response> {
    const productRepository = new ProductRepository();
    const productsService = new ProductService(productRepository);
    const products = await productsService.execute();

    return res.json(products);
  }
}

export default ProductController;
