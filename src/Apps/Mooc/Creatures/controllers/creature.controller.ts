import { Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Creature } from '../../../../Contexts/Mooc/Creatures/Domain/Creature';
import { CreaturesService } from '../services/creatures.service';

@Controller('creatures')
@UseInterceptors(CacheInterceptor)
export class CreaturesController {
    constructor(private creaturesServices: CreaturesService) {}

    @Get()
    async searchAll(
        @Query('lastId') lastId: string,
        @Query('pageSize') pageSize: number,
    ): Promise<Creature[]> {
        return await this.creaturesServices.searchAll(lastId, pageSize);
    }
}
