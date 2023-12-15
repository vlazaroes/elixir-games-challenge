import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
    Creature,
    ICreature,
} from '../../../../Contexts/Backoffice/Creatures/Domain/Creature';
import { CreatureCreatorCommand } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureCreatorCommand';
import { CreatureFinderQuery } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureFinderQuery';
import { CreatureRemoverCommand } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureRemoverCommand';
import { Injectable } from '@nestjs/common';

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
}
