const Discord = require('discord.js')
const help = require('../data/data.json');
const { MessageEmbed } = require("discord.js");
const PREFIX = require ('../config.json')


const fs = require('fs')
module.exports ={ 
    name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
execute (message)  {
  
      
   
   
      let embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random()*16777215))
      .setTitle("Command list for Kyoka:", '')
      
      .addField("For more info about a specific Command:", "Use [prefix]help command_name")
      //.addField("Moderation:", help.helpMsg1)
      .addField("Music:", help.helpMsg2)
      .addField("Fun:", help.helpMsg3)
      //.addField("Useful:", help.helpMsg4)
      //.addField("Action:", help.helpMsg5)
      //.addField("NSFW:", help.helpMsg6)
      .addField("Info", help.helpMsg7)
      return message.channel.send(embed);
     
  
  }



}