// src/webhooks/github.controller.ts

import { Controller, Post, Body, Headers, HttpCode } from '@nestjs/common';
import { GithubService } from './github.service';

@Controller('webhooks')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('/github')
  @HttpCode(200)
  handleGithubEvent(
    @Body() body: any,
    @Headers('X-GitHub-Event') event: string,
  ): string {
    this.githubService.processEvent(event, body);
    return 'Event processed';
  }
}
