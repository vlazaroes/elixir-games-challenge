import { CreatureDescription } from './CreatureDescription';
import { CreatureFirstName } from './CreatureFirstName';
import { CreatureGender } from './CreatureGender';
import { CreatureGoldBalance } from './CreatureGoldBalance';
import { CreatureHealth } from './CreatureHealth';
import { CreatureId } from './CreatureId';
import { CreatureImage } from './CreatureImage';
import { CreatureLastName } from './CreatureLastName';
import { CreatureNationality } from './CreatureNationality';
import { CreaturePassword } from './CreaturePassword';
import { CreatureSecretNotes } from './CreatureSecretNotes';
import { CreatureSpeed } from './CreatureSpeed';
import { CreatureTitleName } from './CreatureTitleName';

export class Creature {
    constructor(
        readonly id: CreatureId,
        readonly titleName: CreatureTitleName,
        readonly firstName: CreatureFirstName,
        readonly lastName: CreatureLastName,
        readonly gender: CreatureGender,
        readonly description: CreatureDescription,
        readonly nationality: CreatureNationality,
        readonly image: CreatureImage,
        readonly goldBalance: CreatureGoldBalance,
        readonly speed: CreatureSpeed,
        readonly health: CreatureHealth,
        readonly secretNotes: CreatureSecretNotes,
        readonly password: CreaturePassword,
    ) {}
}
