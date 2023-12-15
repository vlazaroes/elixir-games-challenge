import {
    CreatureModel,
    CreatureSchema,
} from '../../Shared/Infrastructure/Creatures/CreatureSchema';
import { CreatureCreator } from './Application/Create/CreatureCreator';
import { CreatureCreatorCommandHandler } from './Application/Create/CreatureCreatorCommandHandler';
import { CreatureFindOne } from './Application/SearchOne/CreatureFindOne';
import { CreatureFinder } from './Application/SearchAll/CreatureFinder';
import { CreatureGiveGold } from './Application/GiveGold/CreatureGiveGold';
import { CreatureGiveGoldCommandHandler } from './Application/GiveGold/CreatureGiveGoldCommandHandler';
import { CreatureRemoveGold } from './Application/RemoveGold/CreatureRemoveGold';
import { CreatureRemoveGoldCommandHandler } from './Application/RemoveGold/CreatureRemoveGoldCommandHandler';
import { CreatureRemover } from './Application/Remove/CreatureRemover';
import { CreatureRemoverCommandHandler } from './Application/Remove/CreatureRemoverCommandHandler';
import { CreatureRepository } from './Domain/CreatureRepository';
import { Module } from '@nestjs/common';
import { MongoCreatureRepository } from './Infrastructure/Persistence/MongoCreatureRepository';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchAllCreatureQueryHandler } from './Application/SearchAll/SearchAllCreatureQueryHandler';
import { SearchOneCreatureQueryHandler } from './Application/SearchOne/SearchOneCreatureQueryHandler';

export const CommandHandlers = [
    CreatureCreatorCommandHandler,
    CreatureRemoverCommandHandler,
    CreatureGiveGoldCommandHandler,
    CreatureRemoveGoldCommandHandler,
];

export const QueryHandlers = [
    SearchOneCreatureQueryHandler,
    SearchAllCreatureQueryHandler,
];

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CreatureModel.name, schema: CreatureSchema },
        ]),
    ],
    providers: [
        CreatureFindOne,
        CreatureFinder,
        CreatureCreator,
        CreatureRemover,
        CreatureGiveGold,
        CreatureRemoveGold,
        { provide: CreatureRepository, useClass: MongoCreatureRepository },
        ...QueryHandlers,
        ...CommandHandlers,
    ],
})
export class ContextBackofficeCreaturesModule {}
