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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
const common_1 = require("@nestjs/common");
const my_mp_service_1 = require("./services/my-mp.service");
let FindMyMPController = class FindMyMPController {
    constructor(myMPService) {
        this.myMPService = myMPService;
    }
    byPostcode(postcode) {
        return __awaiter(this, void 0, void 0, function* () {
            const memberOfParliment = yield this.myMPService.postcode(postcode);
            if (memberOfParliment) {
                return memberOfParliment;
            }
            throw new common_1.HttpException({
                status: common_1.HttpStatus.BAD_REQUEST,
                error: `could not find member for postcode: ${postcode}`,
            }, 403);
        });
    }
    byConstituency(constituency) {
        const memberOfParliment = this.myMPService.constituency(constituency);
        if (memberOfParliment) {
            return memberOfParliment;
        }
        throw new common_1.HttpException({
            status: common_1.HttpStatus.BAD_REQUEST,
            error: `constituency: ${constituency} could not be found`,
        }, 403);
    }
};
__decorate([
    common_1.Get('postcode/:postcode'),
    __param(0, common_1.Param('postcode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FindMyMPController.prototype, "byPostcode", null);
__decorate([
    common_1.Get('constituency/:constituency'),
    __param(0, common_1.Param('constituency')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], FindMyMPController.prototype, "byConstituency", null);
FindMyMPController = __decorate([
    common_1.Controller('find-mp'),
    __metadata("design:paramtypes", [my_mp_service_1.MyMPService])
], FindMyMPController);
exports.FindMyMPController = FindMyMPController;
//# sourceMappingURL=find-my-mp.controllers.js.map