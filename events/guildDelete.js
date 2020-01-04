module.exports = (tohru, g) => {
	const gowner = tohru.users.get(g.ownerID)
	tohru.executeWebhook("663063864589680650", require("../config.json").webhook.quetzalcoatl, {
		content: "📤 Left a guild!",
		embeds: [
			{
				"color": 0x92fc65,
				"description": `**Name:** \`${g.name}\`\n**Members:** \`${g.memberCount}\`\n**Owner:** \`${gowner.username}#${gowner.discriminator}\``,
				"footer": {
					text: `Now in ${tohru.guilds.size} guilds!`,
					icon_url: tohru.user.avatarURL
				}
			}
		]
	})
}