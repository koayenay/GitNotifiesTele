import { Module } from '@nestjs/common';
import { GithubService } from './github.service';
import { GithubController } from './github.controller';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  imports: [TelegramModule],
  providers: [GithubService],
  controllers: [GithubController],
})
export class GithubModule {}
