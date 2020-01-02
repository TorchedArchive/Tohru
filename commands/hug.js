exports.run = (tohru, msg) => {
    const fetch = require("node-fetch")
    if(msg.mentions[0]) {
        if (msg.mentions[0].id === tohru.user.id) {
            fetch("https://some-random-api.ml/animu/hug").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ Oh.. T-Thank you~`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Hug",
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
            fetch("https://some-random-api.ml/animu/hug").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ I see you are lonely.. Tohru's here for you! :D`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Hug",
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
            fetch("https://some-random-api.ml/animu/hug").then(res => res.json())
            .then(d => {
                msg.channel.createMessage({content: `☁️ **${msg.author.username}** just gave **${msg.mentions[0].username}** a hug!`, embed: {
                    color: 0xFAB41D,
                    author: {
                        name: "Tohru - Hug",
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
        msg.channel.createMessage("☁️ You need to mention a user to hug!")
    }
}

exports.config = {
    aliases: []
}

exports.help = {
    name: "hug",
    desc: "Give anyone a hug!",
    usage: "hug <@user>"
}