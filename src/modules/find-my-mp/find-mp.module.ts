import { Module } from '@nestjs/common';
import { APIToMPMapper } from './mapper/api-to-mp.mapper';
import { FindMyMPController } from './find-my-mp.controllers';
import { MyMPService } from './services/my-mp.service';

@Module({
  imports: [],
  controllers: [
    FindMyMPController,
  ],
  providers: [
    APIToMPMapper,
    MyMPService,
  ]
})
export class FindMpModule {}
