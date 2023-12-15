import { Creature } from './Creature';
import { CreatureId } from './CreatureId';

export interface CreatureRepository {
    save(creature: Creature): Promise<void>;
    searchAll(lastId: string, pageSize: number): Promise<Creature[]>;
    remove(id: CreatureId): Promise<void>;
}

export const CreatureRepository = Symbol('CreatureRepository');
