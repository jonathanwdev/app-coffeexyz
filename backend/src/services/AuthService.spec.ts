import IUserRepository from 'repositories/IUserRepository';
import User from '../infra/typeorm/entities/User';
import AuthService from './AuthService';

const makeFakeUser = (): User => ({
  id: 'any_id',
  email: 'jon@mail.com',
  created_at: new Date(),
  updated_at: new Date(),
});

const makeFakeUserRepository = (): IUserRepository => {
  class UserRepositoryStub implements IUserRepository {
    async create(email): Promise<User> {
      return new Promise(resolve => resolve(makeFakeUser()));
    }

    async save(email): Promise<User> {
      return new Promise(resolve => resolve(makeFakeUser()));
    }
  }
  return new UserRepositoryStub();
};

const makeSut = () => {
  return new AuthService(makeFakeUserRepository());
};

describe('Authentication', () => {
  it('shoud return an user authenticated', async () => {
    const sut = makeSut();
    const { user, token } = await sut.execute('jon@mail.com');
    expect(user).toHaveProperty('id');
    expect(token).toBe('any_token');
    expect(user.email).toBe('jon@mail.com');
  });
});
