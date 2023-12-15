import { EnumValueObject } from '../../../../Contexts/Shared/Domain/EnumValueObject';
import { ValidationException } from '../../../../Contexts/Shared/Domain/ValidationException';

export enum CreatureTitleNames {
    MR = 'Mr.',
    MRS = 'Mrs.',
}

export class CreatureTitleName extends EnumValueObject<CreatureTitleNames> {
    constructor(value: CreatureTitleNames) {
        super(value, Object.values(CreatureTitleNames));
    }

    static fromValue(value: string): CreatureTitleName {
        for (const titleName of Object.values(CreatureTitleNames)) {
            if (titleName.toString() === value) {
                return new CreatureTitleName(titleName);
            }
        }
        throw new ValidationException(
            `${this.constructor.name} value is invalid`,
        );
    }
}
