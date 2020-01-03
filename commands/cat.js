exports.run = (tohru, msg) => {
	const fetch = require("node-fetch")
	fetch("http://aws.random.cat/meow").then(r => r.json())
	.then(i => {
		msg.channel.createMessage({embed: {
			color: 0xFAB41D,
			description: ">w< a cat!!",
			image: {
				url: i.file
			},
			footer: {
                text: `Requested by ${msg.author.username}#${msg.author.discriminator}`
            }
		}})
	})
}

exports.config = {
	aliases: []
}

exports.help = {
	name: "cat",
	desc: "Give a random and cute cat image!",
	usage: "cat"
}