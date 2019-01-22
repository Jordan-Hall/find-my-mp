"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const serverless = require("aws-serverless-express");
class ServerlessServer {
    constructor(cacheServer) {
        this.cache = cacheServer;
    }
    start(event, context, applicationModule, http) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.cache.snapShot) {
                console.log('Bootstraping server');
                const app = yield core_1.NestFactory.create(applicationModule, http);
                app.init();
                this.cache.update(serverless.createServer(http));
                return serverless.proxy(this.cache.snapShot, event, context);
            }
            else {
                console.log('Using cached server');
                return serverless.proxy(this.cache.snapShot, event, context);
            }
        });
    }
}
exports.ServerlessServer = ServerlessServer;
//# sourceMappingURL=serverless.server.js.map