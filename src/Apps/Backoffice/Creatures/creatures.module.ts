import { APP_INTERCEPTOR } from '@nestjs/core';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { CqrsModule } from '@nestjs/cqrs';
import { CreaturesController } from './controllers/creature.controller';
import { CreaturesService } from './services/creatures.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [CqrsModule],
    controllers: [CreaturesController],
    providers: [
        CreaturesService,
        {
            provide: APP_INTERCEPTOR,
            useClass: CacheInterceptor,
        },
    ],
})
export class AppBackofficeCreaturesModule {}
