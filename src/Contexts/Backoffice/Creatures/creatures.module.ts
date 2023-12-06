import {
    CreatureModel,
    CreatureSchema,
} from './Infrastructure/Persistence/CreatureSchema';
import { CreatureCreator } from './Application/Create/CreatureCreator';
import { CreatureCreatorCommandHandler } from './Application/Create/CreatureCreatorCommandHandler';
import { CreatureRemover } from './Application/Remove/CreatureRemover';
import { CreatureRemoverCommandHandler } from './Application/Remove/CreatureRemoverCommandHandler';
import { CreatureRepository } from './Domain/CreatureRepository';
import { Module } from '@nestjs/common';
import { MongoCreatureRepository } from './Infrastructure/Persistence/MongoCreatureRepository';
import { MongooseModule } from '@nestjs/mongoose';

export const CommandHandlers = [
    CreatureCreatorCommandHandler,
    CreatureRemoverCommandHandler,
];

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CreatureModel.name, schema: CreatureSchema },
        ]),
    ],
    providers: [
        CreatureCreator,
        CreatureRemover,
        { provide: CreatureRepository, useClass: MongoCreatureRepository },
        ...CommandHandlers,
    ],
})
export class ContextCreaturesModule {}
