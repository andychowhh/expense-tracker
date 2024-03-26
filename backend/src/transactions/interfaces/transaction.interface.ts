import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, Types, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Transaction {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  paymentMethod: string;

  @Prop()
  note: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  user: Types.ObjectId;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
