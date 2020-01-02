module.exports = (tohru, msg) => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

    let mssg = msg.content.toLowerCase() || msg.content.toUpperCase()
    const prefixes = [`<@!${tohru.user.id}>`, `<@${tohru.user.id}>`, "tohru ", "t!"]
    let prefix = false
    for(const tprefix of prefixes) {
        if(mssg.startsWith(tprefix)) prefix = tprefix;
    }

    if(!prefix) return;

    const args = msg.content.slice(prefix.length).trim().split(" ")
    const command = args.shift().toLowerCase()
    try {
        let cmd;
        if(tohru.commands.has(command)) {
            cmd = tohru.commands.get(command)
        } else if(tohru.aliases.get(command)) {
            cmd = tohru.commands.get(tohru.aliases.get(command))
        } else {
            return;
        }
        if(cmd.config.ownerOnly) return msg.channel.createMessage("☁️ Only my master can run this command.")
        cmd.run(tohru, msg, args)
    } catch(err) {
        console.log(err)
    }
}
