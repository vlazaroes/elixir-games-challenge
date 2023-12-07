import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Creature } from '../../../../Contexts/Backoffice/Creatures/Domain/Creature';
import { CreatureCreatorCommand } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureCreatorCommand';
import { CreatureDto } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureDto';
import { CreatureFinderQuery } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureFinderQuery';
import { CreatureRemoverCommand } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureRemoverCommand';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreaturesService {
    constructor(
        private queryBus: QueryBus,
        private commandBus: CommandBus,
    ) {}

    async searchAll(): Promise<Creature[]> {
        return await this.queryBus.execute(new CreatureFinderQuery());
    }

    async save(id: string, creature: CreatureDto): Promise<any> {
        return await this.commandBus.execute(
            new CreatureCreatorCommand(
                id,
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

    async remove(id: string): Promise<any> {
        return await this.commandBus.execute(new CreatureRemoverCommand(id));
    }
}
