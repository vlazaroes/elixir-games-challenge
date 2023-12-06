import {
    CreatureModel,
    CreatureSchema,
} from './Infrastructure/Persistence/CreatureSchema';
import { CreatureCreator } from '../../../Contexts/Backoffice/Creatures/Application/Create/CreatureCreator';
import { CreatureCreatorCommandHandler } from '../../../Contexts/Backoffice/Creatures/Application/Create/CreatureCreatorCommandHandler';
import { CreatureRepository } from './Domain/CreatureRepository';
import { Module } from '@nestjs/common';
import { MongoCreatureRepository } from './Infrastructure/Persistence/MongoCreatureRepository';
import { MongooseModule } from '@nestjs/mongoose';

export const CommandHandlers = [CreatureCreatorCommandHandler];

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: CreatureModel.name, schema: CreatureSchema },
        ]),
    ],
    providers: [
        CreatureCreator,
        { provide: CreatureRepository, useClass: MongoCreatureRepository },
        ...CommandHandlers,
    ],
})
export class ContextCreaturesModule {}
