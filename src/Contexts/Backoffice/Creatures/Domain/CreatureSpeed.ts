import { ValidationException } from '../../../../Contexts/Shared/Domain/ValidationException';
import { ValueObject } from '../../../Shared/Domain/ValueObject';

export class CreatureSpeed extends ValueObject<number> {
    constructor(value: number) {
        super(value);
        this.ensureMinAndMax(value);
    }

    private ensureMinAndMax(value: number): void {
        if (value < 0) {
            throw new ValidationException(
                `${this.constructor.name} is less than 0`,
            );
        }
        if (value > 100) {
            throw new ValidationException(
                `${this.constructor.name} is more than 100`,
            );
        }
    }
}
