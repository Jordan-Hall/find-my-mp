import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';
import { IMPDetailsAPIDTO } from './model/mp-details-api.interface';
import { IMemberOfParliment } from './model/member-of-parliment.interface';
import { MyMPService } from './services/my-mp.service';

@Controller('find-mp')
export class FindMyMPController {

    private readonly myMPService: MyMPService;

    constructor(myMPService: MyMPService) {
        this.myMPService = myMPService;
    }

    @Get('postcode/:postcode')
    async byPostcode(@Param('postcode') postcode: string): Promise<IMemberOfParliment> {
        const memberOfParliment: IMemberOfParliment = await this.myMPService.postcode(postcode);
        if (memberOfParliment) {
            return memberOfParliment;
        }
        throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: `could not find member for postcode: ${postcode}`,
          }, 403);
    }

    @Get('constituency/:constituency')
    byConstituency(@Param('constituency') constituency: string): IMemberOfParliment {
        const memberOfParliment: IMemberOfParliment = this.myMPService.constituency(constituency);
        if (memberOfParliment) {
            return memberOfParliment;
        }
        throw new HttpException({
            status: HttpStatus.BAD_REQUEST,
            error: `constituency: ${constituency} could not be found`,
          }, 403);
    }
}
