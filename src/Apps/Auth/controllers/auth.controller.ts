import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { Creature } from '../../../Contexts/Backoffice/Creatures/Domain/Creature';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('signin')
    async signin(@Req() request: Request): Promise<Creature[]> {
        const { username, password } = request.body;
        return await this.authService.signin(username, password);
    }
}
