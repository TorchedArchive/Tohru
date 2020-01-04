module.exports = (tohru, guild) => {
	tohru.executeWebhook("663063864589680650", require("../config.json").webhook.quetzalcoatl, {
		content: "Joined a new guild!",
		embeds: [
			{
				"color": 0x0,
				"description": `${guild.name}`
			}
		]
	})
}
