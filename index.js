const { Client, GatewayIntentBits } = require('discord.js');
const { evaluate } = require('mathjs');
const Counter  = require('./classes/counter.js');
require('dotenv').config()

const CHANNEL = process.env.CHANNEL;
const token = process.env.BOT_TOKEN;

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent]});
const game = new Counter();

client.once('ready', () => {
    console.log("Client Ready...");
});

client.on('messageCreate', (message) => {
    if((message.author.bot) || (message.channel.name.localeCompare(CHANNEL) != 0)) return;
    if(Counter.isValidExpression(message.content)) {
        let value = Counter.isRoman(message.content) ? Counter.romanToInt(message.content) : evaluate(message.content);
        if(game.goodCount(value)) {
            message.react('✅');
            game.increment(); 
         }
         else {
            message.react('❌');
            game.resetScore();
         }
    }
    else {
        message.channel.send("Don't do that ffs");
        console.log("Failed");
    }
});

client.login(token);