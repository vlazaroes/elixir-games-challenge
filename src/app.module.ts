import { AppAuthModule } from './Apps/Auth/auth.module';
import { AppBackofficeCreaturesModule } from './Apps/Backoffice/Creatures/creatures.module';
import { AppBackofficeUsersModule } from './Apps/Backoffice/Users/users.module';
import { AppMoocCreaturesModule } from './Apps/Mooc/Creatures/creatures.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { ContextBackofficeCreaturesModule } from './Contexts/Backoffice/Creatures/creatures.module';
import { ContextMoocCreaturesModule } from './Contexts/Mooc/Creatures/creatures.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RouterModule } from '@nestjs/core';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
    imports: [
        ConfigModule.forRoot(),
        MongooseModule.forRoot(process.env.MONGODB_URL || ''),
        CacheModule.register({
            isGlobal: true,
            store: redisStore,
            url: process.env.REDIS_URL || '',
        }),
        AppMoocCreaturesModule,
        AppAuthModule,
        AppBackofficeCreaturesModule,
        AppBackofficeUsersModule,
        ContextMoocCreaturesModule,
        ContextBackofficeCreaturesModule,
        RouterModule.register([
            {
                path: 'backoffice',
                module: AppBackofficeCreaturesModule,
            },
        ]),
    ],
})
export class AppModule {}
