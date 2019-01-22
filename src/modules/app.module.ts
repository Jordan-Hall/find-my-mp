import { Module } from '@nestjs/common';
import { FindMpModule } from './find-my-mp/find-mp.module';

@Module({
  imports: [FindMpModule],
  controllers: [],
  providers: []
})
export class AppModule {}
