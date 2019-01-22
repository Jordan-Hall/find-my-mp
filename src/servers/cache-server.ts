import { BehaviorSubject, Observable } from 'rxjs';
import { Server } from 'http';

export class CacheServer {
    private cache: BehaviorSubject<Server> = new BehaviorSubject(null);

    public update(cache: Server): void {
        this.cache.next(cache);
    }

    public get cacheServer(): Observable<Server> {
        return this.cache;
    }

    public get snapShot(): Server {
        return this.cache.value;
    }
}