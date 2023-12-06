import { ValueObject } from '../../../Shared/Domain/ValueObject';

export class CreatureSecretNotes extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureLengthCharacters(value);
    }

    private ensureLengthCharacters(value: string): void {
        if (value.length > 254) {
            throw new Error(
                `${this.constructor.name} has more than 254 characters`,
            );
        }
    }
}
