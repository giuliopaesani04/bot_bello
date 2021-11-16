const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login("ODkyNDE0OTc3Mjk2NzI4MTA1.YVMkNg.RqsiJ7I4OTlKhjuZnEKYYYrV8n8")

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", message => {
    if (message.content == "!comando") {
        message.channel.send("Ciao a tutti!")
    }
})