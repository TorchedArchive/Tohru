exports.run = (tohru, msg, args) => {
    if(!args[0]) {
        const cmds = tohru.commands.filter(c => c.config.ownerOnly !== true).map(c => `\`${c.help.usage}\` **--** ${c.help.desc}`).join("\n")
        msg.channel.createMessage({embed: {
            color: 0xFAB41D,
            author: {
                name: "Tohru - Help",
                icon_url: tohru.user.avatarURL
            },
            thumbnail: {
                url: tohru.user.avatarURL.replace("jpg", "png").replace("128", "512")
            },
            title: "Hi senpai~! These are all my commands!",
            description: `${cmds}`,
            fields: [
                {
                    "name": "Links",
                    "value": "[**Invite**](https://discordapp.com/oauth2/authorize?client_id=661376824328323072&scope=bot&permissions=104193089) ❤\n" +
                             "[**Support Server**](https://discord.gg/GPYMkzX) ⛑"
                }
            ]
        }})
    }
}

exports.config = {
    aliases: []
}

exports.help = {
    name: "help",
    desc: "Provide you with all my commands!",
    usage: "help [command]"
}