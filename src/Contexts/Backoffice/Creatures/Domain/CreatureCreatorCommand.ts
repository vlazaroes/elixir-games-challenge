export class CreatureCreatorCommand {
    constructor(
        readonly id: string,
        readonly titleName: string,
        readonly firstName: string,
        readonly lastName: string,
        readonly gender: string,
        readonly description: string,
        readonly nationality: string,
        readonly image: string,
        readonly goldBalance: number,
        readonly speed: number,
        readonly health: number,
        readonly secretNotes: string,
        readonly password: string,
    ) {}
}
