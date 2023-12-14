import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { CreatureFinder } from './CreatureFinder';
import { CreatureFinderQuery } from '../../Domain/CreatureFinderQuery';
import { ICreature } from '../../Domain/Creature';

@QueryHandler(CreatureFinderQuery)
export class SearchAllCreatureQueryHandler
    implements IQueryHandler<CreatureFinderQuery>
{
    constructor(private creatureFinder: CreatureFinder) {}

    async execute(): Promise<ICreature[]> {
        return await this.creatureFinder.run();
    }
}
