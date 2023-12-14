import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Creature } from '../../../../Contexts/Mooc/Creatures/Domain/Creature';
import { CreaturesService } from '../services/creatures.service';

@Controller('creatures')
@UseInterceptors(CacheInterceptor)
export class CreaturesController {
    constructor(private creaturesServices: CreaturesService) {}

    @Get()
    async searchAll(): Promise<Creature[]> {
        return await this.creaturesServices.searchAll();
    }
}
