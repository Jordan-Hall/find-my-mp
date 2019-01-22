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
const serverless_server_1 = require("./servers/serverless.server");
const cache_server_1 = require("./servers/cache-server");
const app_module_1 = require("./modules/app.module");
const express = require('express')();
let cachedServer = new cache_server_1.CacheServer();
exports.handler = (event, context) => __awaiter(this, void 0, void 0, function* () {
    const server = new serverless_server_1.ServerlessServer(cachedServer);
    yield server.start(event, context, app_module_1.AppModule, require(express)());
});
//# sourceMappingURL=handler.js.map