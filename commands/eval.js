exports.run = (tohru, msg, args) => {
	let result;
	let res;
    try {
 		const code = args.join(" ");
      	result = eval(code);
 
      	if (typeof result !== "string") return res = require("util").inspect(result);
 
      	res = clean(result)
    } catch (err) {
    	res = err;
	}
	msg.channel.createMessage({embed: {
		color: 0xFAB41D,
		description: "☁️ Here are your results master!",
		fields: [
			{
				"name": "Output",
				"value": `\`\`\`js\n${res}\n\`\`\``
			}
		],
		footer: {
            text: `Requested by ${msg.author.username}#${msg.author.discriminator}`
        }
	}})

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