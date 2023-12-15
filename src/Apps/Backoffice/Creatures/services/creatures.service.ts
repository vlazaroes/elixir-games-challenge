import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    Creature,
    ICreature,
} from '../../../../Contexts/Backoffice/Creatures/Domain/Creature';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatureCreatorCommand } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureCreatorCommand';
import { CreatureFindOneQuery } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureFindOneQuery';
import { CreatureFinderQuery } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureFinderQuery';
import { CreatureGiveGoldCommand } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureGiveGoldCommand';
import { CreatureRemoveGoldCommand } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureRemoveGoldCommand';
import { CreatureRemoverCommand } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureRemoverCommand';
import { ValidationException } from '../../../../Contexts/Shared/Domain/ValidationException';

@Injectable()
export class CreaturesService {
    constructor(
        private queryBus: QueryBus,
        private commandBus: CommandBus,
    ) {}

    async searchAll(lastId: string, pageSize: number): Promise<Creature[]> {
        return await this.queryBus.execute(
            new CreatureFinderQuery(lastId, pageSize),
        );
    }

    save(creature: ICreature): Promise<any> {
        return this.commandBus.execute(
            new CreatureCreatorCommand(
                creature.id,
                creature.titleName,
                creature.firstName,
                creature.lastName,
                creature.gender,
                creature.description,
                creature.nationality,
                creature.image,
                creature.goldBalance,
                creature.speed,
                creature.health,
                creature.secretNotes,
                creature.password,
            ),
        );
    }

    remove(id: string): Promise<any> {
        return this.commandBus.execute(new CreatureRemoverCommand(id));
    }

    async giveGold(id: string, quantity: number): Promise<any> {
        const creature = await this.queryBus.execute(
            new CreatureFindOneQuery(id),
        );
        if (!creature) {
            throw new NotFoundException();
        }
        if (creature.goldBalance + quantity > 999999) {
            throw new ValidationException(
                'You are exceeding the maximum amount of gold per creature.',
            );
        }
        return this.commandBus.execute(
            new CreatureGiveGoldCommand(id, quantity),
        );
    }

    async removeGold(id: string, quantity: number): Promise<any> {
        const creature = await this.queryBus.execute(
            new CreatureFindOneQuery(id),
        );
        if (!creature) {
            throw new NotFoundException();
        }
        if (creature.goldBalance - quantity < 0) {
            throw new ValidationException(
                'You are trying to remove more gold than the creature has.',
            );
        }
        return this.commandBus.execute(
            new CreatureRemoveGoldCommand(id, quantity),
        );
    }
}
