import { Module } from '@nestjs/common';
import { SignalService } from './signal.service';
import { SignalController } from './signal.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Signal, SignalSchema } from './schema/signal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Signal.name, schema: SignalSchema }]),
  ],
  controllers: [SignalController],
  providers: [SignalService],
})
export class SignalModule {}
