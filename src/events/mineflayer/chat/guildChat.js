const { WebhookClient, EmbedBuilder } = require('discord.js');
const func = require('../../../util/function');
require('dotenv').config();
const apiKey = require('API_KEY.json')
const getStats = require('hypixel_api.js')

module.exports = {
    name: 'chat:guildChat',
	async execute(channel, rank, player, grank, message) {
        if (player == 'aarf') return;
        const webhookClient = new  WebhookClient({ id: process.env.WEBHOOK_ID, token: process.env.WEBHOOK_TOKEN })
        await webhookClient.send({
            content: message,
            username: player,
        })
	},
};