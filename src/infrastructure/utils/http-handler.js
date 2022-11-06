/**
 *
 */
class HttpHandlerRequest {
    /**
     *
     * @param {import('express').Request} req
     * @param {import('express').Response} res
     * @param {function} callback
     */
    static async expressHandler (req, res, callback) {
        try {
            if (typeof callback === 'function') {
                const result = await callback(req)
                return res.status(result?.status || 200).send(result)
            }
            res.status(200).json({ message: 'OK' })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = HttpHandlerRequest
