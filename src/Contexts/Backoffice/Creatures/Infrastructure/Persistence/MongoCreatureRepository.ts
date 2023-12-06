import { Creature } from '../../Domain/Creature';
import { CreatureId } from '../../Domain/CreatureId';
import { CreatureModel } from './CreatureSchema';
import { CreatureRepository } from '../../Domain/CreatureRepository';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class MongoCreatureRepository implements CreatureRepository {
    constructor(
        @InjectModel(CreatureModel.name)
        private creatureModel: Model<CreatureModel>,
    ) {}

    public async save(creature: Creature): Promise<void> {
        await this.creatureModel.findByIdAndUpdate(
            creature.id.value,
            {
                titleName: creature.titleName.value,
                firstName: creature.firstName.value,
                lastName: creature.lastName.value,
                gender: creature.gender.value,
                description: creature.description.value,
                nationality: creature.nationality.value,
                image: creature.image.value,
                goldBalance: creature.goldBalance.value,
                speed: creature.speed.value,
                health: creature.health.value,
                secretNotes: creature.secretNotes.value,
                password: creature.password.value,
            },
            { upsert: true },
        );
    }

    public async remove(id: CreatureId): Promise<void> {
        await this.creatureModel.findByIdAndDelete(id.value);
    }
}
