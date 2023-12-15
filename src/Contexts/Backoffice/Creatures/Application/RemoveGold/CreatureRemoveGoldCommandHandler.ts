import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatureGoldBalance } from '../../Domain/CreatureGoldBalance';
import { CreatureId } from '../../Domain/CreatureId';
import { CreatureRemoveGold } from './CreatureRemoveGold';
import { CreatureRemoveGoldCommand } from '../../Domain/CreatureRemoveGoldCommand';

@CommandHandler(CreatureRemoveGoldCommand)
export class CreatureRemoveGoldCommandHandler
    implements ICommandHandler<CreatureRemoveGoldCommand>
{
    constructor(private creatureRemoveGold: CreatureRemoveGold) {}

    async execute(command: CreatureRemoveGoldCommand): Promise<void> {
        await this.creatureRemoveGold.run(
            new CreatureId(command.id),
            new CreatureGoldBalance(command.quantity),
        );
    }
}
