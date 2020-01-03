exports.run = (tohru, msg, args) => {
	let result;
    try {
 		const code = args.join(" ");
      	result = eval(code);
 
      	if (typeof result !== "string") return result = require("util").inspect(evaled);
 
      	result = clean(result)
    } catch (err) {
    	result = err;
	}
	msg.channel.createMessage({embed: {
		color: 0xFAB41D,
		description: "☁️ Here are your results master!",
		fields: [
			{
				"name": "Output",
				"value": `\`\`\`js\n${result}\n\`\`\``
			}
		]
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