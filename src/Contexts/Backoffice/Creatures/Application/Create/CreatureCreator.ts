import { Inject, Injectable } from '@nestjs/common';
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
import { CreatureRepository } from '../../Domain/CreatureRepository';
import { CreatureSecretNotes } from '../../Domain/CreatureSecretNotes';
import { CreatureSpeed } from '../../Domain/CreatureSpeed';
import { CreatureTitleName } from '../../Domain/CreatureTitleName';

@Injectable()
export class CreatureCreator {
    constructor(
        @Inject(CreatureRepository)
        private creatureRepository: CreatureRepository,
    ) {}

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
        await this.creatureRepository.save(
            new Creature(
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
            ),
        );
    }
}
