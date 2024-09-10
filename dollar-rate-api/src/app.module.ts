import { Module } from '@nestjs/common';
import { RateModule } from './modules/rate/rate.module';
import { SubscribeModule } from './modules/subscribe/subscribe.module';

@Module({
  imports: [RateModule, SubscribeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
