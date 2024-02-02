import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now } from 'mongoose';

@Schema()
export class Transaction {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  category: string;

  @Prop()
  note: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ default: now() })
  createdAt: Date;

  @Prop({ default: now() })
  updatedAt: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
