import {
    CreatureModel,
    CreatureSchema,
} from '../../Shared/Infrastructure/Creatures/CreatureSchema';
import { CreatureFinder } from './Application/SearchAll/CreatureFinder';
import { CreatureRepository } from './Domain/CreatureRepository';
import { Module } from '@nestjs/common';
import { MongoCreatureRepository } from './Infrastructure/Persistence/MongoCreatureRepository';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchAllCreatureQueryHandler } from './Application/SearchAll/SearchAllCreatureQueryHandler';

export const QueryHandlers = [SearchAllCreatureQueryHandler];

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CreatureModel.name, schema: CreatureSchema },
        ]),
    ],
    providers: [
        CreatureFinder,
        { provide: CreatureRepository, useClass: MongoCreatureRepository },
        ...QueryHandlers,
    ],
})
export class ContextMoocCreaturesModule {}
