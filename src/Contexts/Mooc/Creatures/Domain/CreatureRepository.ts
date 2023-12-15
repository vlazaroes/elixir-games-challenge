import { Creature } from './Creature';

export interface CreatureRepository {
    searchAll(lastId: string, pageSize: number): Promise<Creature[]>;
}

export const CreatureRepository = Symbol('CreatureRepository');
