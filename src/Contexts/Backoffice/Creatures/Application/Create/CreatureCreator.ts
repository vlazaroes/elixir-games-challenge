import { Creature } from '../../Domain/Creature';
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
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatureCreator {
    async run(
        id: CreatureId,
        titleName: CreatureTitleName,
        firstName: CreatureFirstName,
        lastName: CreatureLastName,
        gender: CreatureGender,
        description: CreatureDescription,
        nationality: CreatureNationality,
        image: CreatureImage,
        goldBalance: CreatureGoldBalance,
        speed: CreatureSpeed,
        health: CreatureHealth,
        secretNotes: CreatureSecretNotes,
        password: CreaturePassword,
    ): Promise<void> {
        const creature = new Creature(
            id,
            titleName,
            firstName,
            lastName,
            gender,
            description,
            nationality,
            image,
            goldBalance,
            speed,
            health,
            secretNotes,
            password,
        );
        console.log(creature);
    }
}
