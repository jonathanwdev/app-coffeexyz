import { getRepository, Repository } from 'typeorm';
import {
  ITransactionRepository,
  TransactionListData,
} from '../../../repositories/ITransactionRepository';

import Transaction from '../entities/Transaction';

class TransactionRepository implements ITransactionRepository {
  private ormRepository: Repository<Transaction>;

  constructor() {
    this.ormRepository = getRepository(Transaction);
  }

  public async findAllByUserId(
    userId: string,
  ): Promise<Transaction[] | undefined> {
    const transactions = await this.ormRepository.find({
      where: { user_id: userId },
      relations: ['user', 'transactionItems'],
    });
    return transactions;
  }

  public async create(data: TransactionListData): Promise<Transaction> {
    const transaction = this.ormRepository.create(data);
    return transaction;
  }

  public async save(transaction: Transaction): Promise<Transaction> {
    return this.ormRepository.save(transaction);
  }
}

export default TransactionRepository;
