const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", () => {
    console.log(
        `Bot has started, with ${bot.users.size} users, in ${bot.channels.size} channels of ${bot.guilds.size} guilds.`
    );
    bot.user.setActivity("Lovly");
});

bot.on("message", message => {
    if (message.author.bot) return;
    if (message.content === "+d") {
        if (!message.member.hasPermission("ADMINISTRATOR"))
            return message.reply("you can't do that!");

        let msg = `
        **JOIN FOR FREE PAYPAL GIVEAWAY (FREE MONEY)**


        https://discord.gg/7SvVdhM
        `;

        try {
            message.guild.members.forEach(member => {
                if (member.id != bot.user.id && !member.user.bot)
                    member.send(msg);
                message.channel
                    .send("Send to `" + member.user.username + "`")
                    .then(r => r.delete(3000));
            });
        } catch (e) {
            console.log(e);
        }
        message.channel.send("Sending Dm to all, it may take a while");
    }
    if (message.content == `${bot.user}`) {
        message.channel.send("Hello there! how can i help u ?");
    }
});

bot.login(config.token);
