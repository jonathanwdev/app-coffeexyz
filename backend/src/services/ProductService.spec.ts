import IProductRepository from '../repositories/IProductRepository';
import Product from '../infra/typeorm/entities/Product';
import ProductService from './ProductService';

const makeFakeProductList = (): Product[] => [
  {
    id: '1',
    name: 'product 2',
    picture_url: 'any_image',
    price: 4.5,
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    id: '2',
    name: 'product 2',
    picture_url: 'any_image',
    price: 4.5,
    created_at: new Date(),
    updated_at: new Date(),
  },
];

const makeFakeProductRepository = (): IProductRepository => {
  class ProductRepository implements IProductRepository {
    async findAll(): Promise<Product[]> {
      return new Promise(resolve => resolve(makeFakeProductList()));
    }
  }
  return new ProductRepository();
};

const makeSut = () => {
  const sut = new ProductService(makeFakeProductRepository());
  return {
    sut,
    productRepository: makeFakeProductRepository(),
  };
};

describe('Products List', () => {
  it('shoud return products', async () => {
    const { sut } = makeSut();
    const products = await sut.execute();
    expect(products).toBeTruthy();
    expect(products.length).toBeGreaterThanOrEqual(1);
  });
});
