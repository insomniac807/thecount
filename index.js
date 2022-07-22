const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()

const token = process.env.BOT_TOKEN;

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent]});

client.once('ready', () => {
    console.log("Client Ready...");
});

client.on('messageCreate', (message) => {
    console.log(message.content);
    message.channel.send(message.content);
});

client.login(token);