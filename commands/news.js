exports.run = (tohru, msg, args) => {
	const fs = require("fs")
	const news = fs.readFileSync("../src/news.txt")
	if(!args[0]) {
		msg.channel.createMessage({embed: {
			color: 0x0, 
			author: {
				name: "Tohru - News",
				icon_url: tohru.user.avatarURL
			},
			description: "These are my latest changes!\n\n" +
						 `${news.toString()}`
		}})
	}
}

exports.config = {
	aliases: ["upates"]
}

exports.help = {
	name: "news",
	desc: "Look at anything new that I have!",
	usage: "news"
}