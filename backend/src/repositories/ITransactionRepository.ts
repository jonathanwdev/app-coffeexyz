import Transaction from '../infra/typeorm/entities/Transaction';
import { TransactionItem } from './ITransactionItemsRepository';

export type TransactionListData = {
  user_id: string;
  user_name: string;
  user_email: string;
  address: string;
  country: string;
  state: string;
  cep_number: string;
  card_type: string;
  card_name: string;
  card_number: number;
  card_expiresIn: string;
  card_cvv: number;
  transaction_list: TransactionItem[];
};

export interface ITransactionRepository {
  findAllByUserId(userId: string): Promise<Transaction[] | undefined>;
  create(data: TransactionListData): Promise<Transaction>;
  save(data: Transaction): Promise<Transaction>;
}
