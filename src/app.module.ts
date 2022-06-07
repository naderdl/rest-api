import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SignalModule } from './signal/signal.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'rest-api',
      pass: 'admin',
      user: 'admin',
    }),
    SignalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
