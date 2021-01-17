import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_id: string;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Transaction;
