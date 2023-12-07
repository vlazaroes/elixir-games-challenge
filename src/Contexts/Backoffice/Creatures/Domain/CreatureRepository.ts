import { Creature } from './Creature';
import { CreatureId } from './CreatureId';

export interface CreatureRepository {
    save(creature: Creature): Promise<void>;
    searchAll(): Promise<Creature[]>;
    remove(id: CreatureId): Promise<void>;
}

export const CreatureRepository = Symbol('CreatureRepository');
