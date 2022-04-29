const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('serverinfo')
		.setDescription('Gets the info about the server.'),
	async execute(interaction) {

		const { guild } = interaction;

		const { createdTimestamp, ownerId, description } = guild;

		if (interaction.user.id == '275828294115655681') {

			const embed = new MessageEmbed()
				
				.setColor("PURPLE")
				
				.setThumbnail(guild.iconURL({ dynamic: true }))
				.addFields(
					{
						name: "General",
						value:
						`
						Name: ${guild.name}
						Created: <t:${parseInt(createdTimestamp / 1000)}:R>
						Owner: <@${ownerId}>

						Description: ${description}
						`
					}
				)
		
			await interaction.reply({ embeds: [embed] });

		} 

	},
};
