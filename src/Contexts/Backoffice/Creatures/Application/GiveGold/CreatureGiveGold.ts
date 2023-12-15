import { Inject, Injectable } from '@nestjs/common';
import { CreatureGoldBalance } from '../../Domain/CreatureGoldBalance';
import { CreatureId } from '../../Domain/CreatureId';
import { CreatureRepository } from '../../Domain/CreatureRepository';

@Injectable()
export class CreatureGiveGold {
    constructor(
        @Inject(CreatureRepository)
        private creatureRepository: CreatureRepository,
    ) {}

    async run(id: CreatureId, quantity: CreatureGoldBalance): Promise<void> {
        await this.creatureRepository.giveGold(id, quantity);
    }
}
