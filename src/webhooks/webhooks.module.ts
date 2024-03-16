// src/webhooks/webhooks.module.ts

import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { GithubController } from './github.controller';
import { GithubService } from './github.service';
import { WebhooksMiddleware } from './webhooks.middleware';

@Module({
  controllers: [GithubController],
  providers: [GithubService],
})
export class WebhooksModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(WebhooksMiddleware)
      .forRoutes({ path: 'webhooks/github', method: RequestMethod.POST });
  }
}
