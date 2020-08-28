/* 
    Destiny, a JavaScript boilerplate/bot template for me to use for my future bots.
    Copyright (C) 2019 TorchedSammy

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const Eris = require("eris")
const config = require("./config.json")
const { WeebuClient } =  require("./src/structures/WeebuClient.js")
const tohru = new Eris(config.token)

// Here is our custom and cool extended Map class!!
const FancyMap = require("./src/structures/FancyMap.js")

const CatLoggr = require("cat-loggr")
tohru.loggr = new CatLoggr({
    levels: [
        { name: "events", color: CatLoggr._chalk.red.bgBlack },
        { name: "commands", color: CatLoggr._chalk.red.bgBlack },
        { name: "log", color: CatLoggr._chalk.white.bgBlack }
    ]
})

const fs = require("fs")
// This is our command handler, to load up all
// of the commands from the commands directory.

// Get a Map to store the commands (and aliases).
// But to make it "global" we can basically
// attatch it to the client.
tohru.commands = new FancyMap()
tohru.aliases = new FancyMap()

fs.readdir("./commands/", (err, f) => {
    if(err) return loggr.error(err)

    const files = f.filter(f => f.split(".").pop() === "js")
    if(files.length === 0) {
        tohru.loggr.commands("There are no commands to load!")
        console.log(" ")
        return;
    }

    for(let i = 0; i < files.length; i++) {
        let props = require(`./commands/${files[i]}`)
        props.file = files[i]
        tohru.commands.set(props.help.name, props)
        props.config.aliases.forEach(a => {
            tohru.aliases.set(a, props.help.name)
        })
        tohru.loggr.commands(`Successfully loaded command ${files[i].slice(0, -3)}.`)
    }
})

// Our event handler, to load all events from separate files in 1
// directory. Keeps our main file clean with only things 100% needed.
fs.readdir("./events/", (err, f) => {
    if(err) return loggr.error(err)

    const files = f.filter(f => f.split(".").pop() === "js")

    if(files.length === 0) {
        tohru.loggr.events("There are no events to load")
        console.log(" ")
        return;
    }

    for(let i = 0; i < files.length; i++) {
        const event = require(`./events/${files[i]}`)
        tohru.on(files[i].slice(0, -3), event.bind(null, tohru))
        tohru.loggr.events(`Successfully loaded event ${files[i].slice(0, -3)}.`)
    }
})

// Connect to the Discord API.
tohru.connect()

// Map functions
Map.prototype.map = function(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    const arr = new Array(this.size);
    let i = 0;
    for (const [key, val] of this) arr[i++] = fn(val, key, this);
    return arr;
}

Map.prototype.filter = function(fn, thisArg) {
    if (thisArg) fn = fn.bind(thisArg);
    const results = new Map();
    for (const [key, val] of this) {
        if (fn(val, key, this)) results.set(key, val);        
    }
    return results;
      
}
