import {
  BadRequestException,
  Inject,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { IUserRepository, UserRepositoryToken } from 'src/user/user.interface';

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
  provider: 'google';
  providerId: string;
}

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @Inject(UserRepositoryToken) private userRepository: IUserRepository,
  ) {}

  generateJwt(payload) {
    return this.jwtService.sign(payload);
  }

  async signIn(user) {
    if (!user) {
      throw new BadRequestException('Unauthenticated');
    }

    const userExists = await this.findUserByEmail(user.email);

    if (!userExists) {
      return this.registerUser(user);
    }

    return this.generateJwt({
      sub: userExists.id,
      email: userExists.email,
    });
  }

  async registerUser(user: GoogleUser) {
    try {
      const newUser = await this.userRepository.save({
        id: user.providerId,
        email: user.email,
        name: user.name,
      });

      return this.generateJwt({
        sub: newUser.id,
        email: newUser.email,
      });
    } catch {
      throw new InternalServerErrorException();
    }
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository.findOneBy({ email });

    if (!user) {
      return null;
    }

    return user;
  }
}
