import { ValueObject } from '../../../Shared/Domain/ValueObject';

export class CreatureGoldBalance extends ValueObject<number> {
    constructor(value: number) {
        super(value);
        this.ensureMinAndMax(value);
    }

    private ensureMinAndMax(value: number): void {
        if (value < 0) {
            throw new Error(`${this.constructor.name} is less than 0`);
        }
        if (value > 999999) {
            throw new Error(`${this.constructor.name} is more than 999999`);
        }
    }
}
