import { ValidationException } from './ValidationException';

export abstract class EnumValueObject<T> {
    constructor(
        readonly value: T,
        private validValues: T[],
    ) {
        this.ensureValueIsValid(value);
    }

    private ensureValueIsValid(value: T): void {
        if (!this.validValues.includes(value)) {
            throw new ValidationException(
                `${this.constructor.name} does not allow the value '${value}'`,
            );
        }
    }
}
