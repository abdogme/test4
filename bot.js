const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("592959261664083968")
setInterval(function() {
channel.send(`play is spam play is spam play is spam`);
}, 30)
})

client.login(process.env.BOT_TOKEN);