module.exports = (tohru, g) => {
	const gowner tohru.users.get(g.ownerID)
	tohru.executeWebhook("663063864589680650", require("../config.json").webhook.quetzalcoatl, {
		content: "📥 Joined a new guild!",
		embeds: [
			{
				"color": 0x92fc65,
				"description": `**Name:** \`${g.name}\`
				**Members:** \`${g.memberCount}\`
				Owner: ${gowner.username}#${gowner.discriminator}`
			}
		]
	})
}
