exports.run = (tohru, msg) => {
    msg.channel.createMessage({embed: {
        color: 0x9BD2D8,
        author: {
            name: "Tohru - Ping",
            icon_url: tohru.user.avatarURL
        },
        description: `Pong! **\`${tohru.shards.get(0).latency}ms\`**`
    }})
}

exports.config = {
    aliases: []
}

exports.help = {
    name: "ping",
    desc: "A simple ping command. That's kind of it.",
    usage: "ping"
}
