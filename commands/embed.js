const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, Message } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('embed')
		.setDescription('Sends an embed'),
	async execute(interaction) {
        const exampleEmbed = new MessageEmbed()
        .setTitle('i B gropin yhhh')
        .setColor('#0099ff')
        .setDescription('faggy waggy 🔥 ')
        .setThumbnail('https://cdn.discordapp.com/attachments/765827731736494080/945032849382338641/866531812159520778.png')
	    



		await interaction.reply({ embeds: [exampleEmbed] });
	},
};