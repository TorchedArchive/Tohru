exports.run = (tohru, msg) => {
    const fetch = require("node-fetch")
    if(msg.mentions[0]) {
        if (msg.mentions[0].id === tohru.user.id) {
            fetch("https://nekos.life/api/v2/img/tickle").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ ahahaa- oh please stop! >o<`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Tickle",
                        icon_url: tohru.user.avatarURL
                    },
                    image: {
                        url: d.url
                    },
                    footer: {
                        text: `Powered by https://nekos.life| Requested by ${msg.author.username}#${msg.author.discriminator}`
                    }
                }})
            })
        } else if (msg.mentions[0].id === msg.author.id) {
            fetch("https://nekos.life/api/v2/img/tickle").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ hahaHAH how does that feel??`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Tickle",
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
        } else {
            fetch("https://nekos.life/api/v2/img/tickle").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ **${msg.author.username}** has been tickled by **${msg.mentions[0].username}**`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Tickle",
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
        msg.channel.createMessage("☁️ You need to mention a user to tickle!")
    }
}

exports.config = {
    aliases: []
}

exports.help = {
    name: "tickle",
    desc: "Tickle someone to give them a laugh.",
    usage: "tickle <@user>"
}