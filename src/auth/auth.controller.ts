import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { User } from './user.entity';

// http://localhost:3000/auth
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    // http://localhost:3000/auth/signup
    @Post("signup")
    async signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<User> {

        return await this.authService.signUp(authCredentialsDto);

    }

    // http://localhost:3000/auth/signin
    @Post("signin")
    async signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<string> {

        return await this.authService.signIn(authCredentialsDto);

    }

}
