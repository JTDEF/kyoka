const Discord = require('discord.js');
const superagent = require('superagent');
const { MessageEmbed } = require("discord.js");


module.exports  = {
    name: "neko",
    aliases: ["nek"],
    description: "Display Your Neko",
 async execute ( message ) {



 const { body } = await superagent
    .get("https://nekos.life/api/neko");
    link = body.neko;
    
    const neko = new Discord.MessageEmbed()
    .setColor("#ff9900")
    .setTitle("Here's Your Neko OwO")
    .setImage(body.neko) 
    .setFooter('Bot By .-#5050', 'https://cdn.discordapp.com/attachments/608711487325995008/726291173316231168/9f1f238e0c66298d594751eb29979e0e.jpg');
    return message.channel.send(neko);
}

}