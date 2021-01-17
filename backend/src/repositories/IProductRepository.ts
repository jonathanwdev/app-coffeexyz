import Product from '../infra/typeorm/entities/Product';

export default interface IProductRepository {
  findAll(): Promise<Product[]>;
}
