import { Controller, Post, Body, HttpCode, Req } from '@nestjs/common';
import { GithubService } from './github.service';
import { Request } from 'express'; // Make sure to import Request

@Controller('webhooks')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Post('/github')
  @HttpCode(200)
  handleGithubEvent(@Body() body: any, @Req() req: Request) {
    // Correctly handling the case where the header might be a string or an array of strings
    const eventHeader = req.headers['x-github-event'];
    const event = Array.isArray(eventHeader) ? eventHeader[0] : eventHeader;

    console.log(`Received GitHub event: ${event}`, body);

    // Handling different types of GitHub events
    this.githubService.processEvent(event, body);

    return { success: true };
  }
}
