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

export interface ICreature {
    id: string;
    titleName: string;
    firstName: string;
    lastName: string;
    gender: string;
    description: string;
    nationality: string;
    image: string;
    goldBalance: number;
    speed: number;
    health: number;
    secretNotes: string;
    password: string;
}

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

    static fromPrimitives(
        id: string,
        titleName: string,
        firstName: string,
        lastName: string,
        gender: string,
        description: string,
        nationality: string,
        image: string,
        goldBalance: number,
        speed: number,
        health: number,
        secretNotes: string,
        password: string,
    ): Creature {
        return new Creature(
            new CreatureId(id),
            CreatureTitleName.fromValue(titleName),
            new CreatureFirstName(firstName),
            new CreatureLastName(lastName),
            CreatureGender.fromValue(gender),
            new CreatureDescription(description),
            new CreatureNationality(nationality),
            new CreatureImage(image),
            new CreatureGoldBalance(goldBalance),
            new CreatureSpeed(speed),
            new CreatureHealth(health),
            new CreatureSecretNotes(secretNotes),
            new CreaturePassword(password),
        );
    }

    public toPrimitives(): ICreature {
        return {
            id: this.id.value,
            titleName: this.titleName.value,
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            gender: this.gender.value,
            description: this.description.value,
            nationality: this.nationality.value,
            image: this.image.value,
            goldBalance: this.goldBalance.value,
            speed: this.speed.value,
            health: this.health.value,
            secretNotes: this.secretNotes.value,
            password: this.password.value,
        };
    }
}
