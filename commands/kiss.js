exports.run = (tohru, msg) => {
    const fetch = require("node-fetch")
    if(msg.mentions[0]) {
        if (msg.mentions[0].id === msg.author.id) {
            msg.channel.createMessage("☁️ sorry, you're alone here...")
        } else if (msg.mentions[0].id === tohru.user.id) {
            msg.channel.createMessage("☁️ D-dont try to kiss me! hmpf")
        } else {
            fetch("https://nekos.life/api/v2/img/kiss").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ **${msg.author.username}** went for the kiss on **${msg.mentions[0].username}**`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Kiss",
                        icon_url: tohru.user.avatarURL
                    },
                    image: {
                        url: d.url
                    },
                    footer: {
                        text: `Powered by https://nekos.life | Requested by ${msg.author.username}#${msg.author.discriminator}`
                    }
                }})
            })
        }
    } else {
        msg.channel.createMessage("☁️ Mention someone to poke!")
    }
}

exports.config = {
    aliases: []
}

exports.help = {
    name: "kiss",
    desc: "Show your love and kiss someone~!",
    usage: "kiss <@user>"
}