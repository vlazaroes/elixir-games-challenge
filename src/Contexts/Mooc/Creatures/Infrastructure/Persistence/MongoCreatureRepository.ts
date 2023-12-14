import { Creature } from '../../Domain/Creature';
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

    async searchAll(): Promise<Creature[]> {
        const creatures = await this.creatureModel.find();
        return creatures.map(
            (creature) =>
                new Creature(
                    creature.id,
                    creature.titleName,
                    creature.firstName,
                    creature.lastName,
                    creature.gender,
                    creature.description,
                    creature.nationality,
                    creature.image,
                    creature.speed,
                    creature.health,
                ),
        );
    }
}
