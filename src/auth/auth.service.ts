import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { compare } from 'bcrypt';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UsersRepository)
        private usersRepository: UsersRepository
    ) {}

    async signUp(authCredentialsDto: AuthCredentialsDto): Promise<User> {

        return await this.usersRepository.createUser(authCredentialsDto);

    }

    async signIn(authCredentialsDto: AuthCredentialsDto): Promise<string> {

        const { username, password } = authCredentialsDto;

        const user = await this.usersRepository.findOne({ username });

        if (user && (await compare(password, user.password))) {

            return "Deu certo!!! Seja bem-vindo!";

        } else {
            throw new UnauthorizedException("Usuário ou senha inválidos!");
        }

    }

}
