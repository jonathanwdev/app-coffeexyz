import TransactionItems from '../infra/typeorm/entities/TransactionItems';

export type TransactionItem = {
  transaction_id: string;
  amount: number;
  comment: string;
};

export interface ITransactionItemsRepository {
  create(data: TransactionItem): Promise<TransactionItems>;
  save(data: TransactionItem): Promise<TransactionItems>;
}
