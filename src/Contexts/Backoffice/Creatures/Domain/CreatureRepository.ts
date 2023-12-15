import { Creature } from './Creature';
import { CreatureGoldBalance } from './CreatureGoldBalance';
import { CreatureId } from './CreatureId';

export interface CreatureRepository {
    save(creature: Creature): Promise<void>;
    searchOne(id: string): Promise<Creature | null>;
    searchAll(lastId: string, pageSize: number): Promise<Creature[]>;
    remove(id: CreatureId): Promise<void>;
    giveGold(id: CreatureId, quantity: CreatureGoldBalance): Promise<void>;
    removeGold(id: CreatureId, quantity: CreatureGoldBalance): Promise<void>;
}

export const CreatureRepository = Symbol('CreatureRepository');
