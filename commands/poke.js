exports.run = (tohru, msg) => {
    const fetch = require("node-fetch")
    if(msg.mentions[0]) {
        if (msg.mentions[0].id === tohru.user.id) {
            fetch("https://nekos.life/api/v2/img/poke").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ noo please dont p-poke!`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Poke",
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
            fetch("https://nekos.life/api/v2/img/poke").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ poke poke poke~`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Poke",
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
            fetch("https://nekos.life/api/v2/img/poke").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ **${msg.author.username}** just poked **${msg.mentions[0].username}**`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Poke",
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
    name: "poke",
    desc: "Poke poke, give a little poke!",
    usage: "poke <@user>"
}