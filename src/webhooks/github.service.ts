// src/webhooks/github.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubService {
  processEvent(event: string, payload: any): void {
    console.log(`Event: ${event}`);
    console.log(`Payload: ${JSON.stringify(payload)}`);
  }
}
