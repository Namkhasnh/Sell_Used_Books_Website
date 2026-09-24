import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'MPiC9AhpR%KKpzCG',
      appSecret: '6L6gNb%dTq5^F6NSrF5w%PB9&FrwxcvqUtYau1jaDZoGk',
      serviceId: 'backend-nestjs-passbook',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
