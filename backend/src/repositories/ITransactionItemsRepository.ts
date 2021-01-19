import TransactionItems from '../infra/typeorm/entities/TransactionItems';

export type TransactionItem = {
  product_id: string;
  amount: number;
  comment: string;
  picture_url: string;
  name: string;
};

export interface ITransactionItemsRepository {
  create(data: TransactionItem): Promise<TransactionItems>;
  save(data: TransactionItem): Promise<TransactionItems>;
}
