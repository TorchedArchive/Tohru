module.exports = (tohru) => {
    tohru.loggr.log(`I am now online, and in ${tohru.guilds.size} servers.`)
    tohru.editStatus("online", {game: {
    	name: "over you! | @mention me for help!",
    	type: 3
    }})
}
