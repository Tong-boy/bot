const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

// 使用你从 BotFather 获得的 Bot Token
const token = '7628816052:AAFkZwGjZ47TtwYGvxnxQNXtL2hoRdsGceU'; 

// 创建一个 TelegramBot 实例，使用 Webhook 模式
const bot = new TelegramBot(token, { polling: false });  // polling: false 表示禁用轮询

// 创建一个 Express 应用来处理 Webhook 请求
const app = express();
app.use(bodyParser.json());  // 用来解析 JSON 请求

// 处理 Telegram 发送的 Webhook 请求
app.post('/webhook', (req, res) => {
  const msg = req.body.message;
  const chatId = msg.chat.id;

  // 回复收到的消息
  bot.sendMessage(chatId, '你发送了: ' + msg.text);

  // 发送状态 OK 响应 Telegram 服务器，表示请求已成功处理
  res.send('OK');
});

// 设置 Webhook
const webhookUrl = 'https://bot-935m.vercel.app/webhook';  // 替换为你部署的 Vercel URL
bot.setWebHook(webhookUrl);

// 启动服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
