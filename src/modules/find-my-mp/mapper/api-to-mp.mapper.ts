import { Injectable } from '@nestjs/common';
import { IMPDetailsAPIDTO } from '../model/mp-details-api.interface';
import { MemberOfParliment } from '../model/member-of-parliment.model';
import { IMemberOfParliment } from '../model/member-of-parliment.interface';

@Injectable()
export class APIToMPMapper {
    convertToMemberOfParliment(data: IMPDetailsAPIDTO): IMemberOfParliment {
        const mappedDataObject: IMemberOfParliment = {
            chamber: data.chamber,
            constituency: data.area,
            email: data.email,
            gender: data.gender, // STFU lefites, we have assumed gender ;)
            image: data.image,
            name: data.name,
            politicalParty: data.group
        }
        return new MemberOfParliment(mappedDataObject);
    }
}