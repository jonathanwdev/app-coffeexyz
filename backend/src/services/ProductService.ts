import Product from 'infra/typeorm/entities/Product';
import IProductRepository from '../repositories/IProductRepository';

class AuthService {
  private readonly productRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }

  public async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAll();
    return products;
  }
}

export default AuthService;
