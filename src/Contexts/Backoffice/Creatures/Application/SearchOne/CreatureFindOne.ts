import { Inject, Injectable } from '@nestjs/common';
import { CreatureRepository } from '../../Domain/CreatureRepository';
import { ICreature } from '../../Domain/Creature';

@Injectable()
export class CreatureFindOne {
    constructor(
        @Inject(CreatureRepository)
        private creatureRepository: CreatureRepository,
    ) {}

    async run(id: string): Promise<ICreature | null> {
        const creature = await this.creatureRepository.searchOne(id);
        return creature ? creature.toPrimitives() : null;
    }
}
