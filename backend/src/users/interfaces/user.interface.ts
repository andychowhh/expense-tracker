import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { now } from 'mongoose';

@Schema()
export class User {
  _id: mongoose.Types.ObjectId;

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

export interface UserPayload {
  _id: string;
  sub: string;
  username: string;
  email: string;
}
