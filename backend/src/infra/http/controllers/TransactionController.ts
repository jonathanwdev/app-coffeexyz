import { Request, Response } from 'express';
import CreateTransactionService from '../../../services/CreateTransactionService';
import TransactionRepository from '../../typeorm/repositories/TransactionRepository';
import TransactionItemsRepository from '../../typeorm/repositories/TransactionItemsRepository';

class TransactionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const transactionRepository = new TransactionRepository();
    const transactionItemsRepository = new TransactionItemsRepository();
    const productsService = new CreateTransactionService(
      transactionRepository,
      transactionItemsRepository,
    );
    const products = await productsService.execute(req.body, req.user.id);

    return res.json(products);
  }
}

export default TransactionController;
