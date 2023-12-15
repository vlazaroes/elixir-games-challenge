import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CreatureFindOne } from './CreatureFindOne';
import { CreatureFindOneQuery } from '../../Domain/CreatureFindOneQuery';
import { ICreature } from '../../Domain/Creature';

@QueryHandler(CreatureFindOneQuery)
export class SearchOneCreatureQueryHandler
    implements IQueryHandler<CreatureFindOneQuery>
{
    constructor(private creatureFindOne: CreatureFindOne) {}

    async execute(command: CreatureFindOneQuery): Promise<ICreature | null> {
        return await this.creatureFindOne.run(command.id);
    }
}
