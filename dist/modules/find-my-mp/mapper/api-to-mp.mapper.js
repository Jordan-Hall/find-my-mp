"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const member_of_parliment_model_1 = require("../model/member-of-parliment.model");
let APIToMPMapper = class APIToMPMapper {
    convertToMemberOfParliment(data) {
        const mappedDataObject = {
            chamber: data.chamber,
            constituency: data.area,
            email: data.email,
            gender: data.gender,
            image: data.image,
            name: data.name,
            politicalParty: data.group
        };
        return new member_of_parliment_model_1.MemberOfParliment(mappedDataObject);
    }
};
APIToMPMapper = __decorate([
    common_1.Injectable()
], APIToMPMapper);
exports.APIToMPMapper = APIToMPMapper;
//# sourceMappingURL=api-to-mp.mapper.js.map