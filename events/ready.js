module.exports = (tohru) => {
    tohru.loggr.log(`I am now online, and in ${tohru.guilds.size} servers.`)
    tohru.editStatus("online", {
    	name: "over you! | @mention me for help!",
    	type: 3
    })
}
