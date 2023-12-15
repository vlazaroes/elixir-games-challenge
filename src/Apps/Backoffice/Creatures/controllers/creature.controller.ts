import {
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put,
    Query,
    Req,
    UseGuards,
    UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '../../../Auth/auth.guard';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Creature } from '../../../../Contexts/Backoffice/Creatures/Domain/Creature';
import { CreaturesService } from '../services/creatures.service';
import { Request } from 'express';
import { Role } from '../../../Auth/role.enum';
import { Roles } from '../../../Auth/roles.decorator';

@Controller('creatures')
@UseInterceptors(CacheInterceptor)
export class CreaturesController {
    constructor(private creaturesServices: CreaturesService) {}

    @Get()
    @UseGuards(AuthGuard)
    async searchAll(
        @Query('lastId') lastId: string,
        @Query('pageSize') pageSize: number,
    ): Promise<Creature[]> {
        return await this.creaturesServices.searchAll(lastId, pageSize);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    @Roles(Role.Admin)
    @HttpCode(HttpStatus.ACCEPTED)
    save(@Param('id') id: string, @Req() request: Request): Promise<any> {
        return this.creaturesServices.save({
            id: id,
            titleName: request.body.titleName,
            firstName: request.body.firstName,
            lastName: request.body.lastName,
            gender: request.body.gender,
            description: request.body.description,
            nationality: request.body.nationality,
            image: request.body.image,
            goldBalance: request.body.goldBalance,
            speed: request.body.speed,
            health: request.body.health,
            secretNotes: request.body.secretNotes,
            password: request.body.password,
        });
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    @Roles(Role.Admin)
    @HttpCode(HttpStatus.ACCEPTED)
    remove(@Param('id') id: string): Promise<any> {
        return this.creaturesServices.remove(id);
    }

    @Post(':id/gold')
    @UseGuards(AuthGuard)
    @Roles(Role.Ceo)
    @HttpCode(HttpStatus.ACCEPTED)
    giveGold(@Param('id') id: string, @Req() request: Request): Promise<any> {
        return this.creaturesServices.giveGold(id, request.body.quantity);
    }

    @Delete(':id/gold')
    @UseGuards(AuthGuard)
    @Roles(Role.Admin)
    @HttpCode(HttpStatus.ACCEPTED)
    removeGold(@Param('id') id: string, @Req() request: Request): Promise<any> {
        return this.creaturesServices.removeGold(id, request.body.quantity);
    }
}
