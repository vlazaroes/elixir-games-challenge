export abstract class EnumValueObject<T> {
    readonly value: T;

    constructor(
        value: T,
        private validValues: T[],
    ) {
        this.value = value;
        this.ensureValueIsValid(value);
    }

    private ensureValueIsValid(value: T): void {
        if (!this.validValues.includes(value)) {
            throw new Error(
                `${this.constructor.name} does not allow the value '${value}'`,
            );
        }
    }
}
