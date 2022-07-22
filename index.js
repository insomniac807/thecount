const { Client, GatewayIntentBits } = require('discord.js');
const { evaluate } = require('mathjs');
require('dotenv').config()

const CHANNEL = process.env.CHANNEL;
const token = process.env.BOT_TOKEN;

const isMathExpression = (expression) => {
    try {
        evaluate(expression);
        return true;
    } catch (error) {
        return false;
    }
};

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent]});

client.once('ready', () => {
    console.log("Client Ready...");
});

client.on('messageCreate', (message) => {
    if((message.author.bot) || (message.channel.name.localeCompare(CHANNEL) != 0)) return;
    console.log(message.content);
    message.channel.send(`channel: ${isMathExpression(message.content)}`);
});

client.login(token);