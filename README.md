# Project Title: GitHub Telegram Notifier

> GitHub Telegram Notifier is a NestJS application designed to forward GitHub webhook events to a Telegram chat. It enables real-time notifications for activities such as commits, pull requests, and issues directly in a Telegram chat, facilitating faster and more convenient updates for developers and teams.

## Features 🚀

- **Real-time Notifications:** Receive updates in Telegram for push events, pull requests, issues, and more.
- **Customizable Event Subscriptions:** Choose which events in your GitHub repository trigger notifications.
- **Secure Communication:** Validates GitHub webhook payloads to ensure authenticity.
- **Easy to Set Up and Use:** Designed with simplicity in mind for quick integration and configuration.

## Getting Started 🛠

Follow these instructions to get the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v12.x or higher)
- npm (v6.x or higher) or Yarn
- A GitHub account
- A Telegram account with a bot created via [BotFather](https://t.me/botfather)

### Installation

1. **Clone the repository**

git clone https://github.com/<your-username>/GitHub-Telegram-Notifier.git
cd GitHub-Telegram-Notifier
### Install dependencies
npm install
# or if you use Yarn
yarn install

### Set up environment variables
Create a .env file in the root directory and add the following configurations:

env

TELEGRAM_BOT_TOKEN=<your_telegram_bot_token>
TELEGRAM_CHAT_ID=<your_telegram_chat_id>
GITHUB_WEBHOOK_SECRET=<your_github_webhook_secret>

### Start the application
npm run start
# or with Yarn
yarn start

### Configuring GitHub Webhooks
Navigate to your repository settings on GitHub.
Select "Webhooks" > "Add webhook".
Use your ngrok or public server URL followed by /webhooks/github as the Payload URL.
Choose application/json for the content type.
Enter the GITHUB_WEBHOOK_SECRET you used in the .env file.
Select the events you wish to receive notifications for.

### Contact 📬
Arfan Myint - [LinkedIn](https://www.linkedin.com/in/arfan-myint-540587210/)
Project Link: https://github.com/<your-username>/GitHub-Telegram-Notifier
