import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatureCreator } from './CreatureCreator';
import { CreatureCreatorCommand } from '../../Domain/CreatureCreatorCommand';
import { CreatureDescription } from '../../Domain/CreatureDescription';
import { CreatureFirstName } from '../../Domain/CreatureFirstName';
import { CreatureGender } from '../../Domain/CreatureGender';
import { CreatureGoldBalance } from '../../Domain/CreatureGoldBalance';
import { CreatureHealth } from '../../Domain/CreatureHealth';
import { CreatureId } from '../../Domain/CreatureId';
import { CreatureImage } from '../../Domain/CreatureImage';
import { CreatureLastName } from '../../Domain/CreatureLastName';
import { CreatureNationality } from '../../Domain/CreatureNationality';
import { CreaturePassword } from '../../Domain/CreaturePassword';
import { CreatureSecretNotes } from '../../Domain/CreatureSecretNotes';
import { CreatureSpeed } from '../../Domain/CreatureSpeed';
import { CreatureTitleName } from '../../Domain/CreatureTitleName';

@CommandHandler(CreatureCreatorCommand)
export class CreatureCreatorCommandHandler
    implements ICommandHandler<CreatureCreatorCommand>
{
    constructor(private creatureCreator: CreatureCreator) {}

    async execute(command: CreatureCreatorCommand): Promise<void> {
        this.creatureCreator.run(
            new CreatureId(command.id),
            CreatureTitleName.fromValue(command.titleName),
            new CreatureFirstName(command.firstName),
            new CreatureLastName(command.lastName),
            CreatureGender.fromValue(command.gender),
            new CreatureDescription(command.description),
            new CreatureNationality(command.nationality),
            new CreatureImage(command.image),
            new CreatureGoldBalance(command.goldBalance),
            new CreatureSpeed(command.speed),
            new CreatureHealth(command.health),
            new CreatureSecretNotes(command.secretNotes),
            new CreaturePassword(command.password),
        );
    }
}
