import { ValidationException } from '../../../../Contexts/Shared/Domain/ValidationException';
import { ValueObject } from '../../../Shared/Domain/ValueObject';

export class CreatureNationality extends ValueObject<string> {
    constructor(value: string) {
        super(value.toLocaleUpperCase());
        this.ensureLengthCharacters(value);
        this.ensureIsAllLetters(value);
    }

    private ensureLengthCharacters(value: string): void {
        if (value.length != 2) {
            throw new ValidationException(
                `${this.constructor.name} is different from 2 characters`,
            );
        }
    }

    private ensureIsAllLetters(value: string): void {
        const regex = /^[a-zA-Z]+$/;
        if (!regex.test(value)) {
            throw new ValidationException(
                `${this.constructor.name} contains symbols or letters`,
            );
        }
    }
}
