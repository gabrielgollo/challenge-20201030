const MainController = require('../controller/main.controller')

class MainHandler {
    /**
     * @api
     * @path /
     * @method get
     * @function main
     * @description That's the default '/' route using method get
     * @param {import("express").Request} req
     * @param {import("express").Response} res
     * @param {import("express").NextFunction} next
     */
    static main (req, res, next) {
        const message = MainController.main()
        res.status(200).json({ message: 'Default handler', ...message })
    }
}

module.exports = MainHandler
