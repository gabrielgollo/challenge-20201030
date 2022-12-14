const logger = require('log4js').getLogger('Express')
const morgan = require('morgan')

module.exports = morgan(
    'tiny',
    {
        stream: {
            write: (message) => {
                logger.debug(message.trim())
            }
        }
    })
