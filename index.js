const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()

const token = process.env.BOT_TOKEN;

// const myIntents = new GatewayIntentBits();
// myIntents.add();

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions]});

client.once('ready', () => {
    console.log("Client Ready...");
});

client.login(token);