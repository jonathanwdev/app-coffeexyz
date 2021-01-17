import { getRepository, Repository } from 'typeorm';
import IProductRepository from '../../../repositories/IProductRepository';

import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findAll(): Promise<Product[]> {
    const products = await this.ormRepository.find();
    return products;
  }
}

export default ProductRepository;
