import IUserRepository from 'repositories/IUserRepository';
import User from '../infra/typeorm/entities/User';
import AuthService from './AuthService';

const makeFakeUser = (): User => ({
  id: 'any_id',
  email: 'jon@mail.com',
  created_at: new Date(),
  updated_at: new Date(),
});
const fakeMail = 'jon@mail.com';

const makeFakeUserRepository = (): IUserRepository => {
  class UserRepositoryStub implements IUserRepository {
    async create(email): Promise<User> {
      return new Promise(resolve => resolve(makeFakeUser()));
    }

    async save(email): Promise<User> {
      return new Promise(resolve => resolve(makeFakeUser()));
    }

    async findByEmail(email): Promise<User | undefined> {
      return new Promise(resolve => resolve(makeFakeUser()));
    }
  }
  return new UserRepositoryStub();
};

const makeSut = () => {
  const sut = new AuthService(makeFakeUserRepository());
  return {
    sut,
    userRepositoryStub: makeFakeUserRepository(),
  };
};

describe('Authentication', () => {
  it('shoud create or return a user on success', async () => {
    const { sut, userRepositoryStub } = makeSut();
    const { user, token } = await sut.execute(fakeMail);
    jest
      .spyOn(userRepositoryStub, 'findByEmail')
      .mockReturnValueOnce(new Promise(resolve => resolve(undefined)));
    expect(user).toHaveProperty('id');
    expect(token).toBeTruthy();
    expect(user.email).toBe(fakeMail);
  });
});
