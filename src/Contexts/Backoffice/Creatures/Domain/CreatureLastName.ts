import { ValidationException } from '../../../../Contexts/Shared/Domain/ValidationException';
import { ValueObject } from '../../../Shared/Domain/ValueObject';

export class CreatureLastName extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureLengthCharacters(value);
    }

    private ensureLengthCharacters(value: string): void {
        if (value.length < 2) {
            throw new ValidationException(
                `${this.constructor.name} has less than 2 characters`,
            );
        }
        if (value.length > 30) {
            throw new ValidationException(
                `${this.constructor.name} has more than 30 characters`,
            );
        }
    }
}
