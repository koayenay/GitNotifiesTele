import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramModule } from './telegram/telegram.module';
import { GithubModule } from './github/github.module';
import { WebhooksModule } from './webhooks/webhooks.module';

@Module({
  imports: [TelegramModule, GithubModule, WebhooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
