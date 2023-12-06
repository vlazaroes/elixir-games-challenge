export type Primitives = string | number | boolean;

export abstract class ValueObject<T extends Primitives> {
    constructor(readonly value: T) {
        this.ensureValueIsDefined(value);
    }

    private ensureValueIsDefined(value: T): void {
        if (value === null || value === undefined) {
            throw new Error(`${this.constructor.name} value must be defined`);
        }
    }
}
