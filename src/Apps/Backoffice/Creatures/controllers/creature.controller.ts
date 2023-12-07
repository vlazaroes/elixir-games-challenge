import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Put,
    UseInterceptors,
} from '@nestjs/common';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Creature } from '../../../../Contexts/Backoffice/Creatures/Domain/Creature';
import { CreatureDto } from '../../../../Contexts/Backoffice/Creatures/Domain/CreatureDto';
import { CreaturesService } from '../services/creatures.service';

@Controller('creatures')
@UseInterceptors(CacheInterceptor)
export class CreaturesController {
    constructor(private creaturesServices: CreaturesService) {}

    @Get()
    async searchAll(): Promise<Creature[]> {
        return await this.creaturesServices.searchAll();
    }

    @Put(':id')
    @HttpCode(202)
    async save(
        @Param('id') id: string,
        @Body() creature: CreatureDto,
    ): Promise<any> {
        return await this.creaturesServices.save(id, creature);
    }

    @Delete(':id')
    @HttpCode(202)
    async remove(@Param('id') id: string): Promise<any> {
        return await this.creaturesServices.remove(id);
    }
}
