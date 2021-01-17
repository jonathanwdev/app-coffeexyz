import Transaction from 'infra/typeorm/entities/Transaction';
import ErrorHandler from '../Errors/ErrorHandler';
import { ITransactionRepository } from '../repositories/ITransactionRepository';

class FindTransactionService {
  private readonly transactionRepository;

  constructor(transactionRepository: ITransactionRepository) {
    this.transactionRepository = transactionRepository;
  }

  public async execute(user_id: string): Promise<Transaction[] | undefined> {
    if (!user_id) {
      throw new ErrorHandler(`Missing Param Error: ${user_id}`, 401);
    }
    const transactions = await this.transactionRepository.findAllByUserId(
      user_id,
    );

    return transactions;
  }
}

export default FindTransactionService;
