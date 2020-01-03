exports.run = (tohru, msg, args) => {
  	try {
   		const code = args.join(" ");
   		let evaled = eval(code);
 
      	if (typeof evaled !== "string") return evaled = require("util").inspect(evaled);
 
      	msg.channel.createMessage({embed: {
			color: 0xFAB41D,
			description: "☁️ Here are your results master!",
			fields: [
				{
					"name": "Output",
					"value": `\`\`\`js\n${result}\n\`\`\``
				}
			],
			footer: {
		        text: `Requested by ${msg.author.username}#${msg.author.discriminator}`
	        }
		}})
    } catch (err) {
    	msg.channel.createMessage({embed: {
			color: 0xFAB41D,
			description: "☁️ Here are your results master!",
			fields: [
				{
					"name": "Output",
					"value": `\`\`\`js\n${result}\n\`\`\``
				}
			],
			footer: {
	            text: `Requested by ${msg.author.username}#${msg.author.discriminator}`
		    }
		}})
	}
	function clean(text) {
		if (typeof(text) === "string") {
	    	return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		} else {
			return text;
		}
	}
}

exports.config = {
	aliases: ["e"],
	ownerOnly: true
}

exports.help = {
	name: "eval",
	desc: "Runs some javascript code.",
	usage: "eval <code>"
}
