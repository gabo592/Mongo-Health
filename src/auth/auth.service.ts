import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { PayloadToken } from './token.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (!user) {
      throw new NotFoundException(`User not found.`);
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      throw new ConflictException(`Passwords don't match`);
    }

    return user;
  }

  async generateJwt(user: User) {
    const payload: PayloadToken = { role: user.role, sub: user.id };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user,
    };
  }
}
