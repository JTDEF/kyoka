const client = require ('discord.js')
const { MessageEmbed } = require("discord.js");
const { execute } = require('./link');






module.exports = {
    name: "ping",
    aliases: ["pong"],
    description: "Display Bot Ping",

       
         async execute (message)  {
            const msg = await message.channel.send(`🏓 Pinging....`);
    
            msg.edit(`🏓 Pong!
            Latency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms
            API Latency is ${Math.round(client.ping)}ms`);
        }
    }



















