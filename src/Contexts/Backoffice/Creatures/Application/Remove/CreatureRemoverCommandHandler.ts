import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatureId } from '../../Domain/CreatureId';
import { CreatureRemover } from './CreatureRemover';
import { CreatureRemoverCommand } from '../../Domain/CreatureRemoverCommand';

@CommandHandler(CreatureRemoverCommand)
export class CreatureRemoverCommandHandler
    implements ICommandHandler<CreatureRemoverCommand>
{
    constructor(private creatureRemover: CreatureRemover) {}

    async execute(command: CreatureRemoverCommand): Promise<void> {
        await this.creatureRemover.run(new CreatureId(command.id));
    }
}
