import { Injectable } from '@nestjs/common';
import { TelegramService } from 'src/telegram/telegram.service';

@Injectable()
export class GithubService {
  constructor(private readonly telegramService: TelegramService) {}

  async processEvent(event: string, payload: any): Promise<void> {
    let message: string;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    switch (event) {
      case 'push':
        message = `Push event received: ${payload.pusher.name} pushed to ${payload.repository.full_name}`;
        break;
      case 'pull_request':
        message = `Pull request event received: ${payload.action} on ${payload.pull_request.title} in ${payload.repository.full_name}`;
        break;
      case 'star':
        message = `Star event received: ${payload.sender.login} starred ${payload.repository.full_name}`;
        break;
      case 'issues':
        message = `Issue event received: ${payload.action} on issue ${payload.issue.title} in ${payload.repository.full_name}`;
        break;
      default:
        console.log(`Unhandled event type: ${event}`);
        return;
    }

    console.log(message);
    await this.telegramService.sendMessage(chatId, message);
  }
}
