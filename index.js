const { Client, GatewayIntentBits } = require('discord.js');
const { evaluate } = require('mathjs');
const Counter  = require('./classes/counter.js');
require('dotenv').config()

const CHANNEL = process.env.CHANNEL;
const token = process.env.BOT_TOKEN;

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent]});

client.once('ready', () => {
    console.log("Client Ready...");
});

client.on('messageCreate', (message) => {
    if((message.author.bot) || (message.channel.name.localeCompare(CHANNEL) != 0)) return;
    if(Counter.isValidExpression(message.content)) {
        let value = Counter.isRoman(message.content) ? Counter.romanToInt(message.content) : evaluate(message.content);
        console.log(value);
        message.channel.send(`value : ${value}`);
    }
    else {
        console.log("Failed");
    }
});

client.login(token);