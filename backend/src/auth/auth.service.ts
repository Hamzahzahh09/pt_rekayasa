import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'rti2024admin',
};

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  validateUser(username: string, password: string) {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      return { username: ADMIN_CREDENTIALS.username };
    }
    return null;
  }

  login(user: { username: string }) {
    const payload = { username: user.username, sub: 'admin' };
    return {
      access_token: this.jwtService.sign(payload),
      user: { username: user.username },
    };
  }
}
