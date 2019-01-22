"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
class CacheServer {
    constructor() {
        this.cache = new rxjs_1.BehaviorSubject(null);
    }
    update(cache) {
        this.cache.next(cache);
    }
    get cacheServer() {
        return this.cache;
    }
    get snapShot() {
        return this.cache.value;
    }
}
exports.CacheServer = CacheServer;
//# sourceMappingURL=cache-server.js.map