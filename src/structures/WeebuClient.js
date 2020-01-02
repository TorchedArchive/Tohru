const Eris = require("eris")

/**
 * wew
 */
class WeebuClient extends Eris {
    constructor(token, options) {
        super(token, options)

        this.conf = require("../../config.json")
    }
}

module.exports = WeebuClient;