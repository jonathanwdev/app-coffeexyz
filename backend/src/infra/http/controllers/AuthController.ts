import { Request, Response } from 'express';
import AuthService from '../../../services/AuthService';
import UserRepository from '../../typeorm/repositories/UserRepository';

class AuthController {
  public async auth(req: Request, res: Response): Promise<Response> {
    const authService = new AuthService(UserRepository);
    const { email } = req.body;
    const { user, token } = await authService.execute(email);

    return res.json({
      user,
      token,
    });
  }
}

export default AuthController;
