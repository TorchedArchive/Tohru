module.exports = (tohru) => {
    tohru.loggr.log(`I am now online, and in ${tohru.guilds.size} servers.`)
    tohru.editStatus("online", {
    	name: "over you! | @mention me for help!",
    	type: 3
    })
    tohru.executeWebhook("663078839907254312", require("../config.json").webhook.tohru, {
    	content: "✅ I am now up, and ready to be your dragon maid!"
    })
}
