import 'dotenv/config';

export default {
  secret: process.env.JWT_SECRET || 'any_secret',
  expiresIn: process.env.JWT_EXPIRES,
};
