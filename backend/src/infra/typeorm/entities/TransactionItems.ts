import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Transaction from './Transaction';

@Entity('transaction_items')
class TransactionItems {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  product_id: string;

  @Column()
  transaction_id: string;

  @Column()
  amount: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToOne(
    () => Transaction,
    transactionEntity => transactionEntity.transactionItems,
  )
  @JoinColumn({ name: 'transaction_id' })
  transaction: Transaction;
}

export default TransactionItems;
