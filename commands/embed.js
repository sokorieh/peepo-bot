const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Sends an embed'),
	
		
	async execute(interaction) {

		if (interaction.user.id == '275828294115655681') {

			const exampleEmbed = new MessageEmbed()
				.setTitle('AAAA')
				.setColor('#0099ff')
				.setDescription('A')
				.setThumbnail('https://cdn.discordapp.com/attachments/765827731736494080/945032849382338641/866531812159520778.png')
			
	
			await interaction.reply({ embeds: [exampleEmbed] });

		} 

	},
};