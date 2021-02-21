const TelegramBot = require('node-telegram-bot-api');


const TOKEN = '1665452417:AAG_DXXEsBs_gMIlm5he0kccLnGi9rNpr8s';


const bot = new TelegramBot(TOKEN, {
	polling: {
		interval: 300,
		autoStart: true,
		params: {
			setTimeout: 10
		}
	}
});

bot.on('message', (msg) => {
	console.log(msg);
	bot.sendMessage(msg.chat.id, 'Привет, ' + msg.from.first_name)
})