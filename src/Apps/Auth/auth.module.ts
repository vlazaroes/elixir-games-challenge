import { AppBackofficeUsersModule } from '../Backoffice/Users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { jwtConstants } from './constants';

@Module({
    imports: [
        AppBackofficeUsersModule,
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60m' },
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AppAuthModule {}
