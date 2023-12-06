import { ValueObject } from '../../../Shared/Domain/ValueObject';

export class CreatureHealth extends ValueObject<number> {
    constructor(value: number) {
        super(value);
        this.ensureMinAndMax(value);
    }

    private ensureMinAndMax(value: number): void {
        if (value < 1) {
            throw new Error(`${this.constructor.name} is less than 1`);
        }
        if (value > 999) {
            throw new Error(`${this.constructor.name} is more than 999`);
        }
    }
}
