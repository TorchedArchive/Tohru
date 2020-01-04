module.exports = (tohru) => {
    tohru.loggr.log(`I am now online, and in ${tohru.guilds.size} servers.`)
    tohru.editStatus("online", {game: {
    	name: "over you! | @mention me for help!",
    	type: 3
    }})
    tohru.channels.get("663077472186925066").createMessage("I am up now, and ready to be your dragon maid!")
}
