exports.run = (tohru, msg, args) => {
    try {
 		const code = args.join(" ");
      	let result = eval(code);
 
      	if (typeof result !== "string") return result = require("util").inspect(evaled);
 
      	result = clean(result)
    } catch (err) {
    	result = err;
	}
	msg.channel.createMessage({embed: {
		color: 0x0,
		description: "☁️ Here are your results master!",
		fields: [
			{
				"name": "Output",
				"value": `\`\`\`js
						  ${result}
						  \`\`\``
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