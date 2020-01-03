exports.run = (tohru, msg) => {
	const cp = require("child_process")

	cp.exec("git -C /home/augu/Tohru pull origin master", (err, out, stderr) => {
		if(err) {
			msg.channel.createMessage({embed: {
				color: 0xff0000,
				description: `Error while trying to pull:\n\`${err}\``
			}})
			return;
		}
		msg.channel.createMessage({embed: {
			color: 0xFAB41D,
			description: "☁️ Here you go, master!",
			fields: [
				{
					"name": "Output:",
					"value": `\`\`\`bash\n${out || stderr}\`\`\``
				}
			]
		}})
		msg.channel.createMessage("Restarting...")
		setTimeout(() => {
			cp.execSync("pm2 restart Tohru")
		}, 2000)
	})
}

exports.config = {
	aliases: [],
	ownerOnly: true
}

exports.help = {
	name: "pull",
	desc: "Pulls the latest changes from github.",
	usage: "pull"
}