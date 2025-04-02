const TelegramBot = require('node-telegram-bot-api');

// 使用你从 BotFather 获得的 Bot Token
const token = '7628816052:AAFkZwGjZ47TtwYGvxnxQNXtL2hoRdsGceU'; 

// 创建一个 TelegramBot 实例
const bot = new TelegramBot(token, { polling: true });

// 当收到 /start 命令时发送欢迎消息
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '欢迎使用我的 Telegram Bot!');
});

// 处理文本消息
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, '你发送了: ' + msg.text);
});
