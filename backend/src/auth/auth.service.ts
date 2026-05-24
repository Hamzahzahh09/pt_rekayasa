import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  validateUser(username: string, password: string) {
    const adminUsername = this.configService.get<string>('ADMIN_USERNAME') || 'admin';
    const adminPassword = this.configService.get<string>('ADMIN_PASSWORD') || 'rti2024admin';
    
    if (username === adminUsername && password === adminPassword) {
      return { username: adminUsername };
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
