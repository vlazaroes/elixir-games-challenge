import { AppCreaturesModule } from './Apps/Backoffice/Creatures/creatures.module';
import { CacheModule } from '@nestjs/cache-manager';
import { ContextCreaturesModule } from './Contexts/Backoffice/Creatures/creatures.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { redisStore } from 'cache-manager-redis-yet';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://root:example@localhost:27017/elixir'),
        CacheModule.register({
            isGlobal: true,
            store: redisStore,
            url: 'redis://localhost:6379',
        }),
        AppCreaturesModule,
        ContextCreaturesModule,
    ],
})
export class AppModule {}
