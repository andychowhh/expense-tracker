import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId, now } from 'mongoose';

@Schema()
export class User {
  @Prop()
  _id: ObjectId;

  @Prop({ required: true })
  email: string;

  @Prop()
  picture: string;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
