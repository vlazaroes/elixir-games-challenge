import { Creature } from './Creature';

export interface CreatureRepository {
    save(creature: Creature): Promise<void>;
}

export const CreatureRepository = Symbol('CreatureRepository');
