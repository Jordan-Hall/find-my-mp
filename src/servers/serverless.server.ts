import { Context } from 'aws-lambda';

import { NestFactory } from '@nestjs/core';
import * as serverless from 'aws-serverless-express';

import { CacheServer } from './cache-server';

export class ServerlessServer {
  private cache: CacheServer;

  constructor(cacheServer: CacheServer) {
    this.cache = cacheServer;
  }

  public async start(event: any, context: Context, applicationModule: any, http: any) {
    if (!this.cache.snapShot) {
      console.log('Bootstraping server');
      const app = await NestFactory.create(applicationModule, http);
      app.init();
      this.cache.update(serverless.createServer(http));
      return serverless.proxy(this.cache.snapShot, event, context);
    } else {
        console.log('Using cached server');
        return serverless.proxy(this.cache.snapShot, event, context);
    }
  }
}
