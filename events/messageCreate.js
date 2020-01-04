module.exports = (tohru, msg) => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

    let mssg = msg.content.toLowerCase() || msg.content.toUpperCase()
    const prefixes = [`<@!${tohru.user.id}>`, `<@${tohru.user.id}>`, "tohru ", "t!"]
    let prefix = false
    for(const tprefix of prefixes) {
        if(mssg.startsWith(tprefix)) prefix = tprefix;
    }

    if(msg.content === `<@${tohru.user.id}>` || `<@${tohru.user.id}>`) {
        msg.channel.createMessage("👋 Hello~! My name is Tohru, and I am your helpful dragon maid!\nIf you want to start using my commands, type `tohru help` to see all of them. If you want to join my master's server, use `tohru invite`. And if you ever forget my prefix, just mention me again!")
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
        if(msg.author.id !== "439373663905513473") return;
        cmd.run(tohru, msg, args)
    } catch(err) {
        console.log(err)
    }
}
