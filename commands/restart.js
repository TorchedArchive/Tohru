exports.run = (tohru, msg) => {
	const cp = require("child_process")
	msg.channel.createMessage("Restarting...")
	setTimeout(() => {
		cp.execSync("pm2 restart Tohru")
	}, 2000)
}

exports.config = {
	aliases: ["rs"],
	ownerOnly: true
}

exports.help = {
	name: "restart",
	desc: "Restarts the bot.",
	usage: "restart"
}