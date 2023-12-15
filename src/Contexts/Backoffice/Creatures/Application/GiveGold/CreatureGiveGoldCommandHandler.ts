import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatureGiveGold } from './CreatureGiveGold';
import { CreatureGiveGoldCommand } from '../../Domain/CreatureGiveGoldCommand';
import { CreatureGoldBalance } from '../../Domain/CreatureGoldBalance';
import { CreatureId } from '../../Domain/CreatureId';

@CommandHandler(CreatureGiveGoldCommand)
export class CreatureGiveGoldCommandHandler
    implements ICommandHandler<CreatureGiveGoldCommand>
{
    constructor(private creatureGiveGold: CreatureGiveGold) {}

    async execute(command: CreatureGiveGoldCommand): Promise<void> {
        await this.creatureGiveGold.run(
            new CreatureId(command.id),
            new CreatureGoldBalance(command.quantity),
        );
    }
}
