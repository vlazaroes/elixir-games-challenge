import { Creature } from '../../../../Contexts/Mooc/Creatures/Domain/Creature';
import { CreatureFinderQuery } from '../../../../Contexts/Mooc/Creatures/Domain/CreatureFinderQuery';
import { Injectable } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';

@Injectable()
export class CreaturesService {
    constructor(private queryBus: QueryBus) {}

    async searchAll(lastId: string, pageSize: number): Promise<Creature[]> {
        return await this.queryBus.execute(
            new CreatureFinderQuery(lastId, pageSize),
        );
    }
}
