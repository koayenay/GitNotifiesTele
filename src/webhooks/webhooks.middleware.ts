// src/webhooks/webhooks.middleware.ts

import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as crypto from 'crypto';

@Injectable()
export class WebhooksMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction): void {
    const githubSignature = req.headers['x-hub-signature-256'] as string;
    const body = JSON.stringify(req.body);
    const secret = process.env.GITHUB_WEBHOOK_SECRET;
    const hash =
      `sha256=` +
      crypto.createHmac('sha256', secret).update(body).digest('hex');

    if (
      !githubSignature ||
      !crypto.timingSafeEqual(Buffer.from(githubSignature), Buffer.from(hash))
    ) {
      throw new HttpException('Invalid signature', HttpStatus.UNAUTHORIZED);
    }

    next();
  }
}
