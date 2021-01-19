import { ITransactionRepository } from '../repositories/ITransactionRepository';
import Transaction from '../infra/typeorm/entities/Transaction';
import ListTransactionService from './ListTransactionService';
import ErrorHandler from '../Errors/ErrorHandler';

const makeFakeTransaction = (): Transaction => ({
  id: '123',
  user_id: '80c1aa99-2853-4e8c-bbeb-363c4b8ea320',
  user_name: 'Capitão Jack',
  user_email: 'jonathan@mail.com',
  address: 'rua dos bobos',
  country: 'brasil',
  state: 'Rio de Janeiro',
  cep_number: '26336144',
  card_type: 'credit',
  card_name: 'Jonathan Card Number',
  card_number: '123445677897',
  card_expiresIn: '12/17',
  card_cvv: 171,
  transactionItems: [],
  user: '',
  created_at: new Date(),
  updated_at: new Date(),
});

const makeFaketTransactionRepository = (): ITransactionRepository => {
  class FakeTransactionRepository implements ITransactionRepository {
    async create(): Promise<Transaction> {
      return new Promise(resolve => resolve(makeFakeTransaction()));
    }

    async save(): Promise<Transaction> {
      return new Promise(resolve => resolve(makeFakeTransaction()));
    }

    async findAllByUserId(): Promise<Transaction[]> {
      return new Promise(resolve => resolve([makeFakeTransaction()]));
    }
  }
  return new FakeTransactionRepository();
};

const makeSut = () => {
  const sut = new ListTransactionService(makeFaketTransactionRepository());
  return {
    sut,
    productRepository: makeFaketTransactionRepository(),
  };
};

describe('Create Transaction', () => {
  it('shoud return  a transaction ARRAY', async () => {
    const { sut } = makeSut();
    const transactions = await sut.execute('123');
    expect(transactions?.[0]).toBeTruthy();
  });
  it('shoud throw if is missing param', async () => {
    const { sut } = makeSut();
    await expect(sut.execute('')).rejects.toBeInstanceOf(ErrorHandler);
  });
});
