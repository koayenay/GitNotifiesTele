import { Controller, Get } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}
  @Get('/send-test-message')
  async sendTestMessage() {
    const chatId = process.env.TELEGRAM_CHAT_ID;
    const message = 'Hello, this is a test message from my Telegram bot!';
    await this.telegramService.sendMessage(chatId, message);
    return { success: true, message: 'Test message sent.' };
  }
}
