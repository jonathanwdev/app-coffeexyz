import User from 'infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface Response {
  user: User;
  token: string;
}

class AuthService {
  private readonly userRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async execute(email: string): Promise<Response> {
    const user = await this.userRepository.create(email);
    await this.userRepository.save(user);
    return {
      user,
      token: 'any_token',
    };
  }
}

export default AuthService;
