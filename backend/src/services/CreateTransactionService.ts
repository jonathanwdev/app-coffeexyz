import Transaction from 'infra/typeorm/entities/Transaction';
import ErrorHandler from '../Errors/ErrorHandler';
import {
  TransactionListData,
  ITransactionRepository,
} from '../repositories/ITransactionRepository';
import { ITransactionItemsRepository } from '../repositories/ITransactionItemsRepository';

class CreateTransactionService {
  private readonly transactionRepository;

  private readonly transactionItemsRepository;

  constructor(
    transactionRepository: ITransactionRepository,
    transactionItemsRepository: ITransactionItemsRepository,
  ) {
    this.transactionRepository = transactionRepository;
    this.transactionItemsRepository = transactionItemsRepository;
  }

  public async execute(
    data: TransactionListData,
    user_id: string,
  ): Promise<Transaction> {
    const requiredFields = [
      'user_name',
      'user_email',
      'address',
      'country',
      'state',
      'cep_number',
      'card_type',
      'card_name',
      'card_number',
      'card_expiresIn',
      'card_cvv',
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        throw new ErrorHandler(`Missing Param Error: ${field}`, 401);
      }
    }

    const newData = { ...data, user_id };
    const transaction = await this.transactionRepository.create(newData);
    await this.transactionRepository.save(transaction);

    data.transaction_list.forEach(async item => {
      const newItem = { ...item, transaction_id: transaction.id };
      const transactionItem = await this.transactionItemsRepository.create(
        newItem,
      );
      await this.transactionItemsRepository.save(transactionItem);
    });
    return transaction;
  }
}

export default CreateTransactionService;
