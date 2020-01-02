exports.run = (tohru, msg) => {
    const fetch = require("node-fetch")
    if(msg.mentions[0]) {
        if (msg.mentions[0].id === tohru.user.id) {
            fetch("https://some-random-api.ml/animu/pat").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ OwO whats this? Thank you ^~^`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Pat",
                        icon_url: tohru.user.avatarURL
                    },
                    image: {
                        url: d.link
                    },
                    footer: {
                        text: `Powered by https://some-random-api.ml | Requested by ${msg.author.username}#${msg.author.discriminator}`
                    }
                }})
            })
        } else if (msg.mentions[0].id === msg.author.id) {
            fetch("https://some-random-api.ml/animu/pat").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ Here you go **${msg.author.username}** ^-^`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Pat",
                        icon_url: tohru.user.avatarURL
                    },
                    image: {
                        url: d.link
                    },
                    footer: {
                        text: `Powered by https://some-random-api.ml | Requested by ${msg.author.username}#${msg.author.discriminator}`
                    }
                }})
            })
        } else {
            fetch("https://some-random-api.ml/animu/pat").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ **${msg.author.username}** just gave **${msg.mentions[0].username}** a pat~!`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Pat",
                        icon_url: tohru.user.avatarURL
                    },
                    image: {
                        url: d.link
                    },
                    footer: {
                        text: `Powered by https://some-random-api.ml | Requested by ${msg.author.username}#${msg.author.discriminator}`
                    }
                }})
            })
        }
    } else {
        msg.channel.createMessage("☁️ You need to mention a user to pat!")
    }
}

exports.config = {
    aliases: []
}

exports.help = {
    name: "pat",
    desc: "Give anyone a little pat on the head!",
    usage: "pat <@user>"
}