exports.run = (tohru, msg, args) => {
	const fs = require("fs")
	const news = fs.readFileSync("./src/news.txt")
	if(!args[0]) {
		msg.channel.createMessage({embed: {
			color: 0xFAB41D, 
			author: {
				name: "Tohru - News",
				icon_url: tohru.user.avatarURL
			},
			description: "These are my latest changes!\n\n" +
						 `\`${news.toString()}\``,

            footer: {
                text: `Requested by ${msg.author.username}#${msg.author.discriminator}`
            }
		}})
	} else {
		if(msg.author.id !== "439373663905513473") return msg.channel.createMessage("☁️ Only my master can run this command.")
		fs.writeFileSync("./src/news.txt", args.join(" "))
		msg.channel.createMessage("✅ Updated news for you master!")
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