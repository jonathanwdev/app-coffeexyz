import {
  ITransactionRepository,
  TransactionListData,
} from '../repositories/ITransactionRepository';
import { ITransactionItemsRepository } from '../repositories/ITransactionItemsRepository';
import Transaction from '../infra/typeorm/entities/Transaction';
import TransactionItems from '../infra/typeorm/entities/TransactionItems';
import CreateTransactionService from './CreateTransactionService';
import ErrorHandler from '../Errors/ErrorHandler';

const makeFakeTransactionRequest = (): TransactionListData => ({
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
  transaction_list: [
    {
      product_id: '10',
      amount: 12,
      comment: 'Uma transação de teste',
    },
  ],
});

const makeFakeTransaction = (): Transaction => ({
  id: '37941d7e-aeca-4dca-8920-71042ee25c09',
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
  transactionItems: [
    {
      product_id: '10',
      amount: 12,
      comment: 'Uma transação de teste',
    },
  ],
  user: {},
  created_at: new Date(),
  updated_at: new Date(),
});

const makeFakeTransactionItemsRequest = (): TransactionItems => ({
  id: 'any_id',
  amount: 4,
  comment: 'any_text',
  product_id: '14',
  transaction_id: 'dd33',
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

const makeFaketTransactionItemsRepository = (): ITransactionItemsRepository => {
  class FakeTransactionItemsRepository implements ITransactionItemsRepository {
    async create(): Promise<TransactionItems> {
      return new Promise(resolve => resolve(makeFakeTransactionItemsRequest()));
    }

    async save(): Promise<TransactionItems> {
      return new Promise(resolve => resolve(makeFakeTransactionItemsRequest()));
    }
  }
  return new FakeTransactionItemsRepository();
};

const makeSut = () => {
  const sut = new CreateTransactionService(
    makeFaketTransactionRepository(),
    makeFaketTransactionItemsRepository(),
  );
  return {
    sut,
    productRepository: makeFaketTransactionRepository(),
  };
};

describe('Create Transaction', () => {
  it('shoud return  a transaction', async () => {
    const { sut } = makeSut();
    const transaction = await sut.execute(makeFakeTransactionRequest(), '456');
    expect(transaction).toHaveProperty('id');
  });
  it('shoud throws if is missing any params', async () => {
    const { sut } = makeSut();
    await expect(sut.execute({ address: 'ok' }, '456')).rejects.toBeInstanceOf(
      ErrorHandler,
    );
  });
  it('shoud throws if transactions list is empty', async () => {
    const { sut } = makeSut();
    await expect(
      sut.execute(
        {
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
          transaction_list: [],
        },
        '456',
      ),
    ).rejects.toBeInstanceOf(ErrorHandler);
  });
});
