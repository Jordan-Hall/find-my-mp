import { Context, Handler } from 'aws-lambda';
import { ServerlessServer } from './servers/serverless.server'
import { CacheServer } from './servers/cache-server';


import { AppModule } from './modules/app.module';

const express = require('express')();
let cachedServer: CacheServer = new CacheServer();



export const handler: Handler = async (event: any, context: Context) => {
  const server = new ServerlessServer(cachedServer);
  await server.start(event, context, AppModule, require(express)())
};