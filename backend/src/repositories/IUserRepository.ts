import User from '../infra/typeorm/entities/User';

export default interface IUserRepository {
  create(email: string): Promise<User>;
  save(user: User): Promise<User>;
}
