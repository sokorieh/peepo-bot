const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {

		if (interaction.user.id == '275828294115655681') { 

			await interaction.reply('🏓'); 

		}

	},
};