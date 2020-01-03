exports.run = (tohru, msg) => {
    msg.channel.createMessage({embed: {
        color: 0x5FFF42,
        author: {
            name: "Tohru - Invite",
            icon_url: tohru.user.avatarURL
        },
        description: "❤ Please invite me to your server senpai~! [Be sure to click here](https://discordapp.com/oauth2/authorize?client_id=661376824328323072&scope=bot&permissions=104193089)" +
                     "\n⛑ And you can join my server to talk to my master! [Support server!](https://discord.gg/GPYMkzX)"
    }})
}

exports.config = {
    aliases: ["support"],
    category: "bot"
}

exports.help = {
    name: "invite",
    desc: "Links you to my invite and support server link!",
    usage: "invite"
}