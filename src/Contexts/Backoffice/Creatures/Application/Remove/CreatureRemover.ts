import { Inject, Injectable } from '@nestjs/common';
import { CreatureId } from '../../Domain/CreatureId';
import { CreatureRepository } from '../../Domain/CreatureRepository';

@Injectable()
export class CreatureRemover {
    constructor(
        @Inject(CreatureRepository)
        private creatureRepository: CreatureRepository,
    ) {}

    async run(id: CreatureId): Promise<void> {
        await this.creatureRepository.remove(id);
    }
}
