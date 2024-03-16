import { Injectable } from '@nestjs/common';
import { Context, Telegraf } from 'telegraf';

@Injectable()
export class TelegramService {
  private readonly bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

  async sendMessage(chatId: string, message: string): Promise<void> {
    await this.bot.telegram.sendMessage(chatId, message);
  }
}
