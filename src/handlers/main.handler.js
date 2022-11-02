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
        res.status(200).json({ message: 'Default handler' })
    }
}

module.exports = MainHandler
