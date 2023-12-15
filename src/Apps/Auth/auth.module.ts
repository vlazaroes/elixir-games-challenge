import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppBackofficeUsersModule } from '../Backoffice/Users/users.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

@Module({
    imports: [
        ConfigModule,
        AppBackofficeUsersModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('jwt.secret'),
                signOptions: { expiresIn: '60m' },
            }),
            inject: [ConfigService],
            global: true,
        }),
    ],
    providers: [AuthService],
    controllers: [AuthController],
})
export class AppAuthModule {}
