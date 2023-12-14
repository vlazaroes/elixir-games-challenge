import {
    CreatureModel,
    CreatureSchema,
} from '../../Shared/Infrastructure/Creatures/CreatureSchema';
import { CreatureCreator } from './Application/Create/CreatureCreator';
import { CreatureCreatorCommandHandler } from './Application/Create/CreatureCreatorCommandHandler';
import { CreatureFinder } from './Application/SearchAll/CreatureFinder';
import { CreatureRemover } from './Application/Remove/CreatureRemover';
import { CreatureRemoverCommandHandler } from './Application/Remove/CreatureRemoverCommandHandler';
import { CreatureRepository } from './Domain/CreatureRepository';
import { Module } from '@nestjs/common';
import { MongoCreatureRepository } from './Infrastructure/Persistence/MongoCreatureRepository';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchAllCreatureQueryHandler } from './Application/SearchAll/SearchAllCreatureQueryHandler';

export const CommandHandlers = [
    CreatureCreatorCommandHandler,
    CreatureRemoverCommandHandler,
];

export const QueryHandlers = [SearchAllCreatureQueryHandler];

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CreatureModel.name, schema: CreatureSchema },
        ]),
    ],
    providers: [
        CreatureFinder,
        CreatureCreator,
        CreatureRemover,
        { provide: CreatureRepository, useClass: MongoCreatureRepository },
        ...QueryHandlers,
        ...CommandHandlers,
    ],
})
export class ContextBackofficeCreaturesModule {}
