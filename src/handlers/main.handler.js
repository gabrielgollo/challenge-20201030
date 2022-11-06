const MainController = require('../controller/main.controller')

class MainHandler {
    /**
     * @api
     * @path /
     * @method get
     * @function main
     * @description That's the default '/' route using method get to show cron stats
     */
    static main () {
        const message = MainController.getCronStats()
        return message
    }
}

module.exports = MainHandler
