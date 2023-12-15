import { ObjectId as MongoId } from 'bson';
import { ValidationException } from './ValidationException';
import { ValueObject } from './ValueObject';

export class ObjectId extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        this.ensureValueIsValid(value);
    }

    static generate(): ObjectId {
        return new ObjectId(new MongoId().toString());
    }

    private ensureValueIsValid(value: string): void {
        if (!MongoId.isValid(value)) {
            throw new ValidationException(
                `${this.constructor.name} does not allow the value '${value}'`,
            );
        }
    }
}
