import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CreatureDocument = HydratedDocument<CreatureModel>;

@Schema({ collection: 'creatures' })
export class CreatureModel {
    @Prop()
    titleName: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    gender: string;

    @Prop()
    description: string;

    @Prop()
    nationality: string;

    @Prop()
    image: string;

    @Prop()
    goldBalance: number;

    @Prop()
    speed: number;

    @Prop()
    health: number;

    @Prop()
    secretNotes: string;

    @Prop()
    password: string;
}

export const CreatureSchema = SchemaFactory.createForClass(CreatureModel);
