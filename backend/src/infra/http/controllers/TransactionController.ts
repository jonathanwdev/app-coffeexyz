import { Request, Response } from 'express';
import CreateTransactionService from '../../../services/CreateTransactionService';
import ListTransactionService from '../../../services/ListTransactionService';
import TransactionRepository from '../../typeorm/repositories/TransactionRepository';
import TransactionItemsRepository from '../../typeorm/repositories/TransactionItemsRepository';

class TransactionController {
  public async create(req: Request, res: Response): Promise<Response> {
    const transactionRepository = new TransactionRepository();
    const transactionItemsRepository = new TransactionItemsRepository();
    const transactionService = new CreateTransactionService(
      transactionRepository,
      transactionItemsRepository,
    );
    const products = await transactionService.execute(req.body, req.user.id);

    return res.json(products);
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const transactionRepository = new TransactionRepository();
    const listTransactionService = new ListTransactionService(
      transactionRepository,
    );
    const products = await listTransactionService.execute(req.user.id);
    return res.json(products);
  }
}

export default TransactionController;
