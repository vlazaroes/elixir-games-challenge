import { Creature } from '../../Domain/Creature';
import { CreatureGoldBalance } from '../../Domain/CreatureGoldBalance';
import { CreatureId } from '../../Domain/CreatureId';
import { CreatureModel } from '../../../../Shared/Infrastructure/Creatures/CreatureSchema';
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

    async save(creature: Creature): Promise<void> {
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

    async searchOne(id: string): Promise<Creature | null> {
        const creature = await this.creatureModel.findById(id);
        return creature
            ? Creature.fromPrimitives(
                  creature.id,
                  creature.titleName,
                  creature.firstName,
                  creature.lastName,
                  creature.gender,
                  creature.description,
                  creature.nationality,
                  creature.image,
                  creature.goldBalance,
                  creature.speed,
                  creature.health,
                  creature.secretNotes,
                  creature.password,
              )
            : null;
    }

    async searchAll(lastId: string, pageSize: number = 0): Promise<Creature[]> {
        let creatures;
        if (!lastId) {
            creatures = await this.creatureModel.find().limit(pageSize);
        } else {
            creatures = await this.creatureModel
                .find({ _id: { $gt: lastId } })
                .limit(pageSize);
        }
        return creatures.map((creature) =>
            Creature.fromPrimitives(
                creature.id,
                creature.titleName,
                creature.firstName,
                creature.lastName,
                creature.gender,
                creature.description,
                creature.nationality,
                creature.image,
                creature.goldBalance,
                creature.speed,
                creature.health,
                creature.secretNotes,
                creature.password,
            ),
        );
    }

    async remove(id: CreatureId): Promise<void> {
        await this.creatureModel.findByIdAndDelete(id.value);
    }

    async giveGold(
        id: CreatureId,
        quantity: CreatureGoldBalance,
    ): Promise<void> {
        await this.creatureModel.findByIdAndUpdate(id.value, [
            {
                $set: {
                    goldBalance: {
                        $min: [
                            999999,
                            {
                                $sum: ['$goldBalance', quantity.value],
                            },
                        ],
                    },
                },
            },
        ]);
    }

    async removeGold(
        id: CreatureId,
        quantity: CreatureGoldBalance,
    ): Promise<void> {
        await this.creatureModel.findByIdAndUpdate(id.value, [
            {
                $set: {
                    goldBalance: {
                        $max: [
                            0,
                            {
                                $subtract: ['$goldBalance', quantity.value],
                            },
                        ],
                    },
                },
            },
        ]);
    }
}
