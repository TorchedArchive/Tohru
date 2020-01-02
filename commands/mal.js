exports.run = async(tohru, msg, args) => {
    const Jikan = require("jikan-node");
    const mal = new Jikan();

    const m = await msg.channel.createMessage("☁️ Finding profile...")
    mal.findUser(args[0])
    .then(i => {
        m.edit({content: "", embed: {
            color: 0xFAB41D,
            author: {
                name: "Tohru - MyAnimeList",
                icon_url: tohru.user.avatarURL
            },
            thumbnail: {
                url: i.image_url
            },
            description: `${i.username}\n**About:** ${i.about}\n${i.url}\n`,
            fields: [
                {
                    "name": "Completed",
                    "value": i.anime_stats.completed,
                    "inline": true
                },
                {
                    "name": "Watching",
                    "value": i.anime_stats.watching,
                    "inline": true
                },
                {
                    "name": "Plan to Watch",
                    "value": i.anime_stats.plan_to_watch,
                    "inline": true
                },
                {
                    "name": "On Hold",
                    "value": i.anime_stats.on_hold,
                    "inline": true
                },
                {
                    "name": "Dropped",
                    "value": i.anime_stats.dropped,
                    "inline": true
                },
                {
                    "name": "Total Entries",
                    "value": i.anime_stats.total_entries,
                    "inline": true
                }
            ],
            timestamp: i.joined,
            footer: {
                text: "Joined",
                icon_url: i.image_url
            }
        }})
    })
    .catch(e => {
        m.edit({content: "", embed: {
            color: 0xff0000,
            description: "☁️ An error has occurred! Are you sure you typed the right username?"
        }})
    })
}

exports.config = {
    aliases: ["myanimelist"]
}

exports.help = {
    name: "mal",
    desc: "Search for a MyAnimeList profile.",
    usage: "mal <username>"
}
