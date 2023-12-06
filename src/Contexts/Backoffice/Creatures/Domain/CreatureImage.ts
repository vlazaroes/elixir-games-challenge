import { ValueObject } from '../../../Shared/Domain/ValueObject';

export class CreatureImage extends ValueObject<string> {
    constructor(value: string) {
        super(value);
        if (value) {
            this.ensureIsValid(value);
        }
    }

    private ensureIsValid(value: string): void {
        const regex =
            /https?:\/\/(?:www\.)?([-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b)*(\/[\/\d\w\.-]*)*(?:[\?])*(.+)*/;
        if (!regex.test(value)) {
            throw new Error(`${this.constructor.name} is not valid`);
        }
    }
}
