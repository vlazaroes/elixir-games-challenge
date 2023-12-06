import { EnumValueObject } from '../../../../Contexts/Shared/Domain/EnumValueObject';

export enum CreatureGenders {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}

export class CreatureGender extends EnumValueObject<CreatureGenders> {
    constructor(value: CreatureGenders) {
        super(value, Object.values(CreatureGenders));
    }

    static fromValue(value: string): CreatureGender {
        for (const gender of Object.values(CreatureGenders)) {
            if (gender.toString() === value) {
                return new CreatureGender(gender);
            }
        }
        throw new Error(`${this.constructor.name} value is invalid`);
    }
}
