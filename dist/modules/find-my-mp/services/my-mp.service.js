"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_to_mp_mapper_1 = require("../mapper/api-to-mp.mapper");
const common_1 = require("@nestjs/common");
const fetch = require('node-fetch');
const xml2js = require('xml2js');
const mpDetails = require('../data/mp-details.json');
let MyMPService = class MyMPService {
    constructor(mapper) {
        this.mapper = mapper;
    }
    postcode(postcode) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = yield fetch(`http://data.parliament.uk/membersdataplatform/services/mnis/members/query/House=Commons%7Cfymp=${postcode}/`);
                const text = yield request.text();
                const parlimentGovDetails = yield new Promise(res => new xml2js.Parser().parseString(text, (error, result) => res(result)));
                if (parlimentGovDetails.Members.Member.length === 1) {
                    return this.constituency(parlimentGovDetails.Members.Member[0].MemberFrom[0]);
                }
                else {
                    return Promise.reject(null);
                }
            }
            catch (error) {
                Promise.reject(error);
            }
        });
    }
    constituency(constituency) {
        const myMPDetails = mpDetails.find(mp => mp.area === constituency);
        if (myMPDetails) {
            return this.mapper.convertToMemberOfParliment(myMPDetails);
        }
        return null;
    }
};
MyMPService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [api_to_mp_mapper_1.APIToMPMapper])
], MyMPService);
exports.MyMPService = MyMPService;
//# sourceMappingURL=my-mp.service.js.map