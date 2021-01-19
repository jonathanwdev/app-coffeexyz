import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';
import TransactionItems from './TransactionItems';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: string;

  @OneToMany(
    () => TransactionItems,
    transactionItem => transactionItem.transaction,
  )
  transactionItems: TransactionItems[];

  @Column()
  user_name: string;

  @Column()
  user_email: string;

  @Column()
  address: string;

  @Column()
  country: string;

  @Column()
  state: string;

  @Column()
  cep_number: string;

  @Column()
  card_type: string;

  @Column()
  card_name: string;

  @Column()
  card_number: string;

  @Column()
  card_expiresIn: string;

  @Column()
  card_cvv: number;

  @Column()
  total_price: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
