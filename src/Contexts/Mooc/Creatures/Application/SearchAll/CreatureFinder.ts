import { Inject, Injectable } from '@nestjs/common';
import { CreatureRepository } from '../../Domain/CreatureRepository';
import { ICreature } from '../../Domain/Creature';

@Injectable()
export class CreatureFinder {
    constructor(
        @Inject(CreatureRepository)
        private creatureRepository: CreatureRepository,
    ) {}

    async run(lastId: string, pageSize: number): Promise<ICreature[]> {
        const creatures = await this.creatureRepository.searchAll(
            lastId,
            pageSize,
        );
        return creatures.map((creature) => creature.toPrimitives());
    }
}
