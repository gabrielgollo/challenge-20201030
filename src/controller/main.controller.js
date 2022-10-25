class MainController {
    static main (req, res, next) {
        res.status().send('Hello World!')
    }
}

module.exports = MainController
