import { Telegraf } from 'telegraf';

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start(function (ctx) {
    for (const x in ctx) console.log(x)
    ctx.reply('Welcome');
    ctx.reply('saly Sekiro');
    ctx.reply("ur id is:"+ctx.from.id);
})
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears(/hi/i, (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
/*
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('hipster', Telegraf.reply('λ'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))
*/