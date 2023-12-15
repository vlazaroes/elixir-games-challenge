import { ValidationException } from '../../../../Contexts/Shared/Domain/ValidationException';
import { ValueObject } from '../../../Shared/Domain/ValueObject';

export class CreaturePassword extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureLengthCharacters(value);
        this.ensureIsNotEntirelyNumeric(value);
    }

    private ensureLengthCharacters(value: string): void {
        if (value.length < 8) {
            throw new ValidationException(
                `${this.constructor.name} has less than 8 characters`,
            );
        }
        if (value.length > 100) {
            throw new ValidationException(
                `${this.constructor.name} has more than 100 characters`,
            );
        }
    }

    private ensureIsNotEntirelyNumeric(value: string): void {
        if (Number.isNaN(value)) {
            throw new ValidationException(
                `${this.constructor.name} is entirely numeric`,
            );
        }
    }
}
