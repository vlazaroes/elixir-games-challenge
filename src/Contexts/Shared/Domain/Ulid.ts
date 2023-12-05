import { isValid, ulid } from 'ulidx';
import { ValueObject } from './ValueObject';

export class Ulid extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureValueIsValid(value);
    }

    static generate(): Ulid {
        return new Ulid(ulid());
    }

    private ensureValueIsValid(value: string): void {
        if (!isValid(value)) {
            throw new Error(
                `${this.constructor.name} does not allow the value '${value}'`,
            );
        }
    }
}
