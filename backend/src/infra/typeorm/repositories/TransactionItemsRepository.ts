import { getRepository, Repository } from 'typeorm';
import {
  ITransactionItemsRepository,
  TransactionItem,
} from '../../../repositories/ITransactionItemsRepository';
import TransactionItems from '../entities/TransactionItems';

class TransactionItemsRepository implements ITransactionItemsRepository {
  private ormRepository: Repository<TransactionItems>;

  constructor() {
    this.ormRepository = getRepository(TransactionItems);
  }

  public async create(data: TransactionItem): Promise<TransactionItems> {
    const transactionItem = this.ormRepository.create(data);
    return transactionItem;
  }

  public async save(transaction: TransactionItems): Promise<TransactionItems> {
    return this.ormRepository.save(transaction);
  }
}

export default TransactionItemsRepository;
