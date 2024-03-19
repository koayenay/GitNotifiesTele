# GitHub Telegram Notifier

> GitHub Telegram Notifier is a NestJS application designed to forward GitHub webhook events to a Telegram chat. It enables real-time notifications for activities such as commits, pull requests, and issues directly in a Telegram chat, facilitating faster and more convenient updates for developers and teams.

## Features 🚀

- **Real-time Notifications:** Receive updates in Telegram for push events, pull requests, issues, and more.
- **Customizable Event Subscriptions:** Choose which events in your GitHub repository trigger notifications.
- **Secure Communication:** Validates GitHub webhook payloads to ensure authenticity.
- **Easy to Set Up and Use:** Designed with simplicity in mind for quick integration and configuration.

 ## Technologies Used

- **Language**: TypeScript
- **Framework**: NestJS
- **Runtime Environment**: Node.js
- **Other Technologies**:
  - GitHub Webhooks for event triggers.
  - Telegram Bot API for sending notifications.

## Getting Started 🛠

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher) or Yarn
- A GitHub account
- A Telegram account with a bot created via [BotFather](https://t.me/botfather)

### Installation
**Clone the repository**

   Open your terminal, navigate to your desired directory, and run the following command to clone the repository:

   ```bash
   git clone https://github.com/koayenay/GitHub-Telegram-Notifier.git
   cd GitHub-Telegram-Notifier
```

   To get started with this project, follow these steps:

```bash
npm install
# Or using Yarn
yarn install
```

### Set up environment variables
Create a .env file in the root directory and add the following configurations:
```bash
TELEGRAM_BOT_TOKEN=<your_telegram_bot_token>
TELEGRAM_CHAT_ID=<your_telegram_chat_id>
GITHUB_WEBHOOK_SECRET=<your_github_webhook_secret>
```
### Start the application
```bash
npm run start
```
# or with Yarn
```bash
yarn start
```

## Setting up GitHub Webhooks

To receive notifications from GitHub, you need to set up a webhook:

1. Go to your GitHub repository's settings.
2. Navigate to "Webhooks" > "Add webhook".
3. For the "Payload URL", use your server URL (or ngrok URL during development) followed by `/webhooks/github`, e.g., `http://123abc.ngrok.io/webhooks/github`.
4. Select `application/json` for the "Content type".
5. Input the `GITHUB_WEBHOOK_SECRET` you defined in your `.env` file.
6. Choose the events you want to receive notifications for.
7. Make sure the webhook is active and click "Add webhook".


### Contact 📬
Arfan Myint - [LinkedIn](https://www.linkedin.com/in/arfan-myint-540587210/)
Project Link: https://github.com/<your-username>/GitHub-Telegram-Notifier
