import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../../Backoffice/Users/services/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signin(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== password) {
            throw new UnauthorizedException();
        }
        const payload = {
            sub: user.id,
            username: user.username,
            role: user.role,
        };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }
}
