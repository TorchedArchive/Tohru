exports.run = (tohru, msg, args) => {
	let result;
  	try {
   		const code = args.join(" ");
 		if(code.includes("--silent") || code.includes("-s")) {
 		 	result = eval(code.replace("--silent", "").replace("-s", ""));
 		} else {
 			result = eval(code)
 		}


      	if (typeof result !== "string") 
      		result = require("util").inspect(result);

      	code.includes("--silent") || code.includes("-s") ? msg.channel.createMessage(result) : msg.channel.createMessage({embed: {
			color: 0xFAB41D,
			description: `☁️ Here are your results master!\n\`\`\`js\n${clean(result)}\n\`\`\``,
			footer: {
		        text: `Requested by ${msg.author.username}#${msg.author.discriminator}`
	        }
		}})
    } catch (err) {
    	msg.channel.createMessage({embed: {
			color: 0xFAB41D,
			description: `☁️ Here are your results master!\n\`\`\`js\n${err.stack}\n\`\`\``,
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
