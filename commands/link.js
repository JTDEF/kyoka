const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "link",
    aliases: ["links"],
    description: "Display all links",
    execute(message) {
      let commands = message.client.commands.array();

      let linkEmbed = new MessageEmbed()
    .setTitle("Kyoka Help")
      .setDescription("List of all links")
      .setColor("#F8AA2A");
      linkEmbed.addFields(
		{ name: 'Links for add on your serveur', value: 'https://discord.com/oauth2/authorize?client_id=574190403771826176&scope=bot&permissions=56745224' },
		{ name: '\u200B', value: '\u200B' },
        )
        linkEmbed.setFooter('Bot By .-#5050', 'https://cdn.discordapp.com/attachments/608711487325995008/726291173316231168/9f1f238e0c66298d594751eb29979e0e.jpg');
      
      return message.channel.send(linkEmbed);
    }
}