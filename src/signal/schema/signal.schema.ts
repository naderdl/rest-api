import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SignalDocument = Signal & Document;

@Schema()
export class Signal {
  @Prop()
  symbol: string;

  @Prop()
  buy: number;

  @Prop()
  sell: number;
}

export const SignalSchema = SchemaFactory.createForClass(Signal);
