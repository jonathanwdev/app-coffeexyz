import { sign } from 'jsonwebtoken';
import User from '../infra/typeorm/entities/User';
import ErrorHandler from '../Errors/ErrorHandler';
import jwtConfig from '../config/jwt';
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
    if (!email) {
      throw new ErrorHandler('Error, invalid email', 401);
    }

    const findUser = await this.userRepository.findByEmail(email);
    let token;

    if (findUser) {
      token = sign({}, jwtConfig.secret, {
        subject: findUser.id,
        expiresIn: jwtConfig.expiresIn,
      });

      return {
        user: findUser,
        token,
      };
    }
    const contUserIntance = await this.userRepository.create(email);
    const user = await this.userRepository.save(contUserIntance);
    token = sign({}, jwtConfig.secret, {
      subject: user.id,
      expiresIn: jwtConfig.expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthService;
