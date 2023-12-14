export interface ICreature {
    id: string;
    titleName: string;
    firstName: string;
    lastName: string;
    gender: string;
    description: string;
    nationality: string;
    image: string;
    speed: number;
    health: number;
}

export class Creature {
    constructor(
        readonly id: string,
        readonly titleName: string,
        readonly firstName: string,
        readonly lastName: string,
        readonly gender: string,
        readonly description: string,
        readonly nationality: string,
        readonly image: string,
        readonly speed: number,
        readonly health: number,
    ) {}

    toPrimitives(): ICreature {
        return {
            id: this.id,
            titleName: this.titleName,
            firstName: this.firstName,
            lastName: this.lastName,
            gender: this.gender,
            description: this.description,
            nationality: this.nationality,
            image: this.image,
            speed: this.speed,
            health: this.health,
        };
    }
}
