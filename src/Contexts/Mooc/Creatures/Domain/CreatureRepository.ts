import { Creature } from './Creature';

export interface CreatureRepository {
    searchAll(): Promise<Creature[]>;
}

export const CreatureRepository = Symbol('CreatureRepository');
