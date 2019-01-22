import { IMPDetailsAPIDTO } from '../model/mp-details-api.interface';
import { APIToMPMapper } from '../mapper/api-to-mp.mapper';
import { IFindConstituency } from '../model/find-consitituency.interface';
import { Injectable } from '@nestjs/common';
import { IMemberOfParliment } from '../model/member-of-parliment.interface';

const fetch = require('node-fetch');
const xml2js = require('xml2js');
import mpDetails = require('../data/mp-details.json');

@Injectable()
export class MyMPService {

    private mapper: APIToMPMapper;

    constructor(mapper: APIToMPMapper) {
        this.mapper = mapper;
    }

    public async postcode(postcode: string): Promise<IMemberOfParliment | null> {
        try {
            const request = await fetch(`http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7Cfymp=${postcode}/`)
            const text = await request.text();
            const parlimentGovDetails: IFindConstituency = await new Promise(res => new xml2js.Parser().parseString(text, (error: any, result: IFindConstituency) => res(result)));
            if (parlimentGovDetails.Members.Member.length === 1) {
                return this.constituency(parlimentGovDetails.Members.Member[0].MemberFrom[0]);
            } else {
                return Promise.reject(null);
            }
        } catch(error) {
            Promise.reject(null);
        }
    }

    public constituency(constituency: string): IMemberOfParliment | null {
        const myMPDetails  = mpDetails.find(mp => mp.area.toLocaleLowerCase() === constituency.toLocaleLowerCase()) as IMPDetailsAPIDTO;
        if(myMPDetails) {
            return this.mapper.convertToMemberOfParliment(myMPDetails);
        }
        return null;
    }
 }